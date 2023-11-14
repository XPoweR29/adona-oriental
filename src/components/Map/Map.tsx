
interface Props {
    className?: string;
}

export const Map = ({className}: Props) => {
    return (
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.206776612357!2d19.050315304098735!3d49.8233852166067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169f61bb649f5d%3A0x7064dbbcb5fcf689!2sAdona!5e0!3m2!1spl!2spl!4v1699890574876!5m2!1spl!2spl'
				loading='lazy'
                className={className}></iframe>
		);
}