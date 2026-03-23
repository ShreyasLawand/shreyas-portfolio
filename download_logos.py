import urllib.request
import os
import time

urls = {
    "python": "https://logo.clearbit.com/python.org",
    "mysql": "https://logo.clearbit.com/mysql.com",
    "langchain": "https://avatars.githubusercontent.com/u/126733221?s=200&v=4",
    "fastapi": "https://logo.clearbit.com/fastapi.tiangolo.com",
    "tensorflow": "https://logo.clearbit.com/tensorflow.org",
    "postgresql": "https://logo.clearbit.com/postgresql.org",
    "docker": "https://logo.clearbit.com/docker.com",
    "aws": "https://logo.clearbit.com/aws.amazon.com"
}

os.makedirs("public/images", exist_ok=True)

for name, url in urls.items():
    print(f"Downloading {name}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            with open(f"public/images/{name}.png", "wb") as f:
                f.write(response.read())
        time.sleep(0.5)
    except Exception as e:
        print(f"Failed {name}: {e}")
        # fallback to a generic colored image programmatically
        from PIL import Image, ImageDraw
        img = Image.new('RGB', (200, 200), color = (73, 109, 137))
        d = ImageDraw.Draw(img)
        d.text((10,10), name, fill=(255,255,0))
        img.save(f"public/images/{name}.png")

print("Done.")
