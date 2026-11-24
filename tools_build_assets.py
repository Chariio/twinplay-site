#!/usr/bin/env python3
"""Build optimized images for the TwinPlay marketing site."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter, ImageFont, ImageOps

ROOT = Path("/workspace/twinplay-site")
ASSETS = ROOT / "assets"
SHOTS = ASSETS / "screenshots"
COMING = ASSETS / "coming"
ASSETS.mkdir(parents=True, exist_ok=True)
SHOTS.mkdir(parents=True, exist_ok=True)
COMING.mkdir(parents=True, exist_ok=True)

ICON_SRC = Path("/workspace/twinplay/icons-gta6/03-palms-device-cinematic-1024.png")
BADGE_SRC = Path("/tmp/badges/as-badge.svg")
PROMO = Path("/workspace/twinplay/promo/screenshots-v2")
MAC = Path("/workspace/twinplay/promo/asc-1.5/screenshots/mac_01_systems.png")
COMPOSITES = Path("/workspace/twinplay/skins-new/previews/composites")
FONT = "/usr/share/fonts/truetype/sand-box/google/Outfit/Outfit-VariableFont_wght.ttf"


def save_webp(im: Image.Image, dest: Path, width=None, quality=82):
    im = im.convert("RGB")
    if width and im.width > width:
        h = int(im.height * width / im.width)
        im = im.resize((width, h), Image.Resampling.LANCZOS)
    dest.parent.mkdir(parents=True, exist_ok=True)
    im.save(dest, "WEBP", quality=quality, method=6)
    print(f"  {dest.name} {im.size} {dest.stat().st_size//1024}KB")
    return im


def rounded(im: Image.Image, radius: int) -> Image.Image:
    im = im.convert("RGBA")
    mask = Image.new("L", im.size, 0)
    d = ImageDraw.Draw(mask)
    d.rounded_rectangle((0, 0, im.width, im.height), radius=radius, fill=255)
    out = im.copy()
    out.putalpha(mask)
    return out


def main():
    # Official App Store badge (unmodified)
    badge_dest = ASSETS / "badge-app-store.svg"
    badge_dest.write_bytes(BADGE_SRC.read_bytes())
    print("badge", badge_dest.stat().st_size)

    # App icon
    icon = Image.open(ICON_SRC).convert("RGBA")
    icon.save(ASSETS / "icon-1024.png", "PNG", optimize=True)
    icon.resize((180, 180), Image.Resampling.LANCZOS).save(ASSETS / "apple-touch-icon.png", "PNG", optimize=True)
    icon.resize((32, 32), Image.Resampling.LANCZOS).save(ASSETS / "favicon-32.png", "PNG", optimize=True)
    icon.resize((512, 512), Image.Resampling.LANCZOS).convert("RGB").save(
        ASSETS / "icon-512.webp", "WEBP", quality=88, method=6
    )
    # Squircle-ish preview for nav fallback (iOS applies its own mask to apple-touch)
    r = int(1024 * 0.225)
    rounded(icon, r).resize((256, 256), Image.Resampling.LANCZOS).save(
        ASSETS / "icon-rounded-256.png", "PNG", optimize=True
    )

    # Hero backdrop: tall crop of the icon, stretched wide, softly blurred and darkened
    bg = icon.convert("RGB").resize((1600, 1600), Image.Resampling.LANCZOS)
    # take a center band and scale to 2400x1200
    hero = bg.resize((2400, 2400), Image.Resampling.LANCZOS)
    top = (2400 - 1200) // 2 - 80
    hero = hero.crop((0, max(0, top), 2400, max(0, top) + 1200))
    hero = hero.filter(ImageFilter.GaussianBlur(8))
    # darken for text contrast
    dark = Image.new("RGB", hero.size, (7, 6, 12))
    hero = Image.blend(hero, dark, 0.45)
    save_webp(hero, ASSETS / "hero-bg.webp", width=1920, quality=78)

    # Open Graph 1200x630
    og = Image.new("RGB", (1200, 630), (10, 6, 22))
    # gradient from icon colors
    grad = icon.convert("RGB").resize((1200, 1200), Image.Resampling.LANCZOS)
    grad = grad.crop((0, 200, 1200, 830)).filter(ImageFilter.GaussianBlur(16))
    dark = Image.new("RGB", (1200, 630), (8, 5, 18))
    og.paste(Image.blend(grad, dark, 0.35), (0, 0))
    mark = rounded(icon, r).resize((380, 380), Image.Resampling.LANCZOS)
    # drop shadow
    shadow = Image.new("RGBA", og.size, (0, 0, 0, 0))
    sd = Image.new("RGBA", (400, 400), (0, 0, 0, 0))
    ImageDraw.Draw(sd).rounded_rectangle((10, 16, 390, 396), radius=int(380 * 0.225), fill=(0, 0, 0, 140))
    sd = sd.filter(ImageFilter.GaussianBlur(18))
    shadow.paste(sd, (70, 115), sd)
    og = og.convert("RGBA")
    og = Image.alpha_composite(og, shadow)
    og.paste(mark, (90, 125), mark)
    draw = ImageDraw.Draw(og)
    font_lg = ImageFont.truetype(FONT, 92)
    font_sm = ImageFont.truetype(FONT, 32)
    x = 520
    draw.text((x, 200), "TwinPlay", font=font_lg, fill=(255, 250, 255))
    draw.text((x, 310), "Dual-Screen Emulator", font=font_sm, fill=(230, 210, 235))
    draw.text((x, 360), "For iPhone and iPad", font=font_sm, fill=(230, 210, 235))
    og.convert("RGB").save(ASSETS / "og.jpg", "JPEG", quality=88, optimize=True)
    print("og", (ASSETS / "og.jpg").stat().st_size // 1024, "KB")

    # App Store screenshots (official 1.4 marketing art, invented homebrew scenes only)
    iphone = [
        "iphone_01_systems.png",
        "iphone_02_editor.png",
        "iphone_03_skins.png",
        "iphone_04_devices.png",
        "iphone_05_saves.png",
        "iphone_06_controller.png",
    ]
    for name in iphone:
        im = Image.open(PROMO / name)
        key = name.replace("iphone_", "iphone-").replace(".png", ".webp")
        save_webp(im, SHOTS / key, width=800, quality=84)

    for name, out, w in [
        ("ipad_01_systems.png", "ipad-01-systems.webp", 1100),
        ("ipad_03_skins.png", "ipad-03-skins.webp", 1100),
        ("ipad_04_devices.png", "ipad-04-devices.webp", 1100),
        ("foldable_01_systems.png", "foldable-01-systems.webp", 800),
        ("foldable_04_devices.png", "foldable-04-devices.webp", 800),
    ]:
        save_webp(Image.open(PROMO / name), SHOTS / out, width=w, quality=84)

    # Mac 1.5 systems shot (in review only — not a live Mac App Store listing)
    save_webp(Image.open(MAC), SHOTS / "mac-01-systems.webp", width=1440, quality=84)

    coming_map = {
        "dcClassicWhite_portrait.jpg": "dc-classic-white.webp",
        "dcSportsBlack_portrait.jpg": "dc-sports-black.webp",
        "dcClearPink_portrait.jpg": "dc-clear-pink.webp",
        "dcClearBlue_portrait.jpg": "dc-clear-blue.webp",
        "gcIndigo_portrait.jpg": "gc-indigo.webp",
        "gcJetBlack_portrait.jpg": "gc-jet-black.webp",
        "gcPlatinum_portrait.jpg": "gc-platinum.webp",
        "gcSpice_portrait.jpg": "gc-spice.webp",
        "vitaCrystalBlack_portrait.jpg": "vita-crystal-black.webp",
        "vitaCrystalWhite_portrait.jpg": "vita-crystal-white.webp",
        "vitaAquaBlue_portrait.jpg": "vita-aqua-blue.webp",
        "vitaPinkBlack_portrait.jpg": "vita-pink-black.webp",
    }
    for src, dest in coming_map.items():
        save_webp(Image.open(COMPOSITES / src), COMING / dest, width=480, quality=86)

    print("done")


if __name__ == "__main__":
    main()
