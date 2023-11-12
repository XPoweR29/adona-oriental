import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { AiFillStar } from 'react-icons/ai';
import corner1 from '../../assets/img/corner_1.png';
import corner2 from '../../assets/img/corner_2.png';
import data from '../../assets/reviews_mockup/mockup.json';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './MySwiper.scss';
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

interface Review {
	nickname: string;
	rate: number;
	review: string;
}

export const MySwiper: React.FC = () => {
	const {breakpoint} = useContext(AppContext)!;
	const reviews: Review[] = data;

	return (
		<Swiper
			className={`mySwiper`}
			modules={[Autoplay, Navigation]}
			spaceBetween={35}
			slidesPerView={breakpoint.lg ? 3 : (breakpoint.md ? 2 : 1)}
			slidesPerGroup={1}
			navigation
			autoplay={{ delay: 5000, disableOnInteraction: false }}>
			{reviews.map((rev, index) => (
				<SwiperSlide className='card' key={index}>
					<h4 className='card__user'>{rev.nickname}</h4>

					<div className='card__rating'>
						{Array.from({ length: rev.rate }, (_, i) => (
							<AiFillStar key={i} />
						))}
					</div>

					<p className='card__text'>{`" ${rev.review} "`}</p>
				</SwiperSlide>
			))}

			<img src={corner1} className='corner1' />
			<img src={corner2} className='corner2' />
		</Swiper>
	);
};