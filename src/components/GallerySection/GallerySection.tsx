import { useEffect, useState } from 'react';
import styles from './GallerySection.module.scss';
import { Preview } from '../Preview/Preview';
import mosaic from '../../assets/img/mosaic 2.png'; 

export const GallerySection = () => {
    const [images, setImages] = useState<string[]>([]);
    const [previewShown, setPreviewShown] = useState<boolean>(false);
    const [clickedImg, setClickedImg] = useState<string | null>(null);
    useEffect(() => {
        const loadImages = async () => {
            const importFns = import.meta.glob('../../../src/assets/photos/*.jpg');
            const srcs = await Promise.all(
                Object.values(importFns).map(async(importFns) => {
                    const module: any = await importFns();
                    return module.default;
                })
            ); 
            setImages(srcs);
        };
        loadImages(); 
    }, []);

    const previewHandler = (imgSrc: string) => {
        setClickedImg(imgSrc);
        setPreviewShown(true);
    };

    return (
        <section className={styles.gallery} id='gallery'>

            <div className={styles.wrapper}>
                <h2 className={styles.gallery__title}>Galeria</h2>
                <p className={styles.gallery__text}>Zapraszamy do wizualnej podróży przez nasze kulinarne arcydzieła. Każde zdjęcie to fragment naszej pasji do tworzenia niepowtarzalnych smaków.</p>

                <div className={styles.box}>
                    {images.map((image, i) => {
                        return(
                            <div className={styles.thumbnail} key={i} onClick={()=>previewHandler(image)}>
                                <img src={image} alt="Fotografia potrawy"/>
                            </div>
                        );
                    })}
                </div>
                <img src={mosaic} className={styles.mosaic} />
            </div>

            {previewShown && clickedImg && <Preview clickedImg={clickedImg} images={images} setPreviewShown={setPreviewShown}/>}

        </section>
    );
};