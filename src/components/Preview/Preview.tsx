import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './Preview.module.scss';
import { Icon } from '@iconify/react';

interface Props {
	images: string[];
	clickedImg: string;
	setPreviewShown: (shown: boolean) => void;
}

export const Preview = ({ clickedImg, images, setPreviewShown }: Props) => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'visible';
		};
	});

	return (
		<div className={styles.previewContainer}>
			<div className={styles.wrapper}>
				<button
					className={styles.closeBtn}
					onClick={() => setPreviewShown(false)}>
					<Icon icon='mingcute:close-line' />
				</button>
				<Swiper
					className={styles.photosSwiper}
					spaceBetween={30}
					pagination={{ clickable: true }}
					navigation={true}
					initialSlide={images.indexOf(clickedImg)}
					modules={[Pagination, Navigation, HashNavigation]}>
					{images.map((img, index) => (
						<SwiperSlide className={styles.photo} key={index}>
							<img src={img} alt='preview' />
						</SwiperSlide>
					))}

				</Swiper>
			</div>
		</div>
	);
};
