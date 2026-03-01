<?php
// Script para Autogenerar Galerías de BrothersFilms
// Basado en la estructura de carpetas: img/categoria/album/foto.jpg

$cat = isset($_GET['cat']) ? preg_replace('/[^a-zA-Z0-9_-]/', '', $_GET['cat']) : 'bodas';
$album = isset($_GET['album']) ? preg_replace('/[^a-zA-Z0-9_\s-]/', '', $_GET['album']) : '';

$base_dir = 'img/' . $cat;
$categoryNames = [
    'bodas' => 'Bodas Cinematográficas',
    'xv' => 'Quinceañeras Editoriales',
    'casuales' => 'Sesiones Save the Date'
];

$titleCat = isset($categoryNames[$cat]) ? $categoryNames[$cat] : ucfirst($cat);
$titleAlbum = $album ? ucwords(str_replace('-', ' ', $album)) : 'Portafolio';

// Si no existe la carpeta base, mostrar advertencia amigable
if (!is_dir($base_dir)) {
    @mkdir($base_dir, 0755, true); // Intentar crearla por si acaso
}

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $album ? "$titleAlbum | " : ""; ?><?php echo $titleCat; ?> | BrothersFilms</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
    
    <!-- Lightbox CSS para hacer Zoom a las fotos -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/css/lightbox.min.css" rel="stylesheet" />

    <style>
        :root {
            --bg-dark: #0a0a0a;
            --text-main: #ffffff;
            --text-light: #a0a0a0;
            --gold: #b08d57;
            --font-heading: 'Playfair Display', serif;
            --font-body: 'Inter', sans-serif;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: var(--font-body); color: var(--text-main); background-color: var(--bg-dark); }
        a { text-decoration: none; color: inherit; }
        
        /* Header */
        header { padding: 30px 5%; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .logo { font-family: var(--font-heading); font-size: 24px; font-weight: 600; letter-spacing: 1px; color:#fff;}
        .back-btn { font-size: 14px; color: var(--gold); border: 1px solid var(--gold); padding: 8px 16px; border-radius: 4px; transition: 0.3s; }
        .back-btn:hover { background: var(--gold); color: #000; }

        /* Hero */
        .hero { padding: 60px 5%; text-align: center; }
        .hero h1 { font-family: var(--font-heading); font-size: clamp(32px, 5vw, 48px); font-weight: 400; margin-bottom: 10px; }
        .hero p { color: var(--text-light); font-size: 16px; text-transform: uppercase; letter-spacing: 2px; }

        /* Grid de Álbumes (Carpetas) */
        .albums-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 30px; padding: 0 5% 100px; max-width: 1200px; margin: 0 auto; }
        .album-card { background: #111; border-radius: 8px; overflow: hidden; border: 1px solid #222; transition: transform 0.3s; display: block;}
        .album-card:hover { transform: translateY(-5px); border-color: var(--gold); }
        .album-cover { width: 100%; height: 350px; object-fit: cover; }
        .album-info { padding: 20px; text-align: center; }
        .album-title { font-family: var(--font-heading); font-size: 20px; color: #fff; margin-bottom: 5px; }
        .album-count { font-size: 13px; color: var(--gold); text-transform: uppercase; letter-spacing: 1px; }

        /* Masonry Grid para Fotos de 1 solo Álbum */
        .photo-grid { column-count: 3; column-gap: 15px; padding: 0 5% 100px; max-width: 1400px; margin: 0 auto; }
        @media (max-width: 900px) { .photo-grid { column-count: 2; } }
        @media (max-width: 600px) { .photo-grid { column-count: 1; } }
        
        .photo-item { margin-bottom: 15px; break-inside: avoid; border-radius: 4px; overflow: hidden; position: relative;}
        .photo-item img { width: 100%; height: auto; display: block; filter: grayscale(10%) contrast(110%); transition: 0.5s; cursor: zoom-in; }
        .photo-item:hover img { filter: grayscale(0%) contrast(100%); transform: scale(1.02); }

        .empty-state { text-align: center; padding: 100px 20px; color: #555; border: 2px dashed #333; margin: 0 5%; border-radius: 8px;}
    </style>
</head>
<body>

    <header>
        <a href="index.html" class="logo">BrothersFilms</a>
        <?php if ($album): ?>
            <a href="galeria.php?cat=<?php echo $cat; ?>" class="back-btn">← Volver a <?php echo $titleCat; ?></a>
        <?php else: ?>
            <a href="index.html#portafolio" class="back-btn">← Volver a Inicio</a>
        <?php endif; ?>
    </header>

    <div class="hero">
        <h1><?php echo $album ? $titleAlbum : $titleCat; ?></h1>
        <p><?php echo $album ? "Colección Exclusiva" : "Portafolio Selecto"; ?></p>
    </div>

    <?php if (!$album): ?>
        <!-- VISTA DE ÁLBUMES (CARPETAS) -->
        <div class="albums-grid">
            <?php 
            $hasAlbums = false;
            if (is_dir($base_dir)) {
                $items = array_diff(scandir($base_dir), array('..', '.'));
                foreach ($items as $folder) {
                    $folder_path = $base_dir . '/' . $folder;
                    if (is_dir($folder_path)) {
                        $hasAlbums = true;
                        
                        // Buscar la primera imagen de la carpeta para usarla de portada
                        $cover = 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800'; // Placeholder
                        $files = glob($folder_path . '/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', GLOB_BRACE);
                        if (!empty($files)) {
                            $cover = $files[0]; // Tomas la primera foto
                        }
                        
                        $folderTitle = ucwords(str_replace('-', ' ', $folder));
                        $photosCount = count($files);
                        
                        echo "
                        <a href='galeria.php?cat={$cat}&album={$folder}' class='album-card'>
                            <img src='{$cover}' alt='{$folderTitle}' class='album-cover'>
                            <div class='album-info'>
                                <h3 class='album-title'>{$folderTitle}</h3>
                                <div class='album-count'>{$photosCount} Momentos</div>
                            </div>
                        </a>";
                    }
                }
            }
            if (!$hasAlbums) {
                echo "</div><div class='empty-state'><h3>Aún no hay galerías en {$titleCat}</h3><p>Crea carpetas dentro de public_html/{$base_dir}/ en tu Hostinger para que aparezcan automáticamente aquí.</p></div><div>";
            }
            ?>
        </div>

    <?php else: ?>
        <!-- VISTA DE FOTOS (ADENTRO DEL ÁLBUM) -->
        <div class="photo-grid">
            <?php
            $album_path = $base_dir . '/' . $album;
            $hasPhotos = false;
            if (is_dir($album_path)) {
                $photos = glob($album_path . '/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG}', GLOB_BRACE);
                if (!empty($photos)) {
                    $hasPhotos = true;
                    foreach ($photos as $idx => $photo) {
                        // Usamos Lightbox para que al clicar se abran grandes
                        echo "
                        <div class='photo-item'>
                            <a href='{$photo}' data-lightbox='boda-gallery' data-title='{$titleAlbum} - BrothersFilms'>
                                <img src='{$photo}' alt='{$titleAlbum} img {$idx}' loading='lazy'>
                            </a>
                        </div>";
                    }
                }
            }
            if (!$hasPhotos) {
                echo "</div><div class='empty-state'><h3>Álbum vacío</h3><p>Sube tus archivos .jpg a la carpeta public_html/{$album_path}/ en Hostinger.</p></div><div>";
            }
            ?>
        </div>
    <?php endif; ?>

    <!-- Scripts de Lightbox -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.4/js/lightbox-plus-jquery.min.js"></script>
    <script>
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true,
          'albumLabel': "Foto %1 de %2",
          'fadeDuration': 300
        })
    </script>
</body>
</html>
