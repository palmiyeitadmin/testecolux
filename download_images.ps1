$images = @(
    @{ Url = "https://picsum.photos/id/15/1920/1080"; Path = "public/assets/img/hero-bg.jpg" },
    @{ Url = "https://picsum.photos/id/11/800/800"; Path = "public/assets/img/aero-1.jpg" },
    @{ Url = "https://picsum.photos/id/12/800/800"; Path = "public/assets/img/aero-2.jpg" },
    @{ Url = "https://picsum.photos/id/13/800/800"; Path = "public/assets/img/aero-3.jpg" },
    @{ Url = "https://picsum.photos/id/14/800/800"; Path = "public/assets/img/grove-1.jpg" },
    @{ Url = "https://picsum.photos/id/15/800/800"; Path = "public/assets/img/grove-2.jpg" },
    @{ Url = "https://picsum.photos/id/16/800/800"; Path = "public/assets/img/grove-3.jpg" },
    @{ Url = "https://picsum.photos/id/17/800/800"; Path = "public/assets/img/nova-1.jpg" },
    @{ Url = "https://picsum.photos/id/18/800/800"; Path = "public/assets/img/nova-2.jpg" },
    @{ Url = "https://picsum.photos/id/19/800/800"; Path = "public/assets/img/nova-3.jpg" },
    @{ Url = "https://picsum.photos/id/20/800/800"; Path = "public/assets/img/vista-1.jpg" },
    @{ Url = "https://picsum.photos/id/21/800/800"; Path = "public/assets/img/vista-2.jpg" },
    @{ Url = "https://picsum.photos/id/22/800/800"; Path = "public/assets/img/vista-3.jpg" },
    @{ Url = "https://picsum.photos/id/23/800/800"; Path = "public/assets/img/vista-4.jpg" },
    @{ Url = "https://picsum.photos/id/24/1200/600"; Path = "public/assets/img/grandis-1.jpg" },
    @{ Url = "https://picsum.photos/id/25/1200/600"; Path = "public/assets/img/grandis-2.jpg" }
)

foreach ($img in $images) {
    Write-Host "Downloading $($img.Url) to $($img.Path)..."
    Invoke-WebRequest -Uri $img.Url -OutFile $img.Path
}
