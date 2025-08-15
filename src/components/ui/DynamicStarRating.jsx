import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';

const DenamicStarRating = ({ rating }) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
        stars.push(<FaStar key={i} className="inline text-primary mr-1" />);
    }
    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" className="inline text-primary mr-1" />);
    }
    for (let i = 0; i < emptyStars; i++) {
        stars.push(<FaRegStar key={`empty-${i}`} className="inline text-gray-400 mr-1" />);
    }
    return (
        <>
            <span className="text-sm font-medium text-gray-400 uppercase flex items-center">
                {stars}
            </span>
        </>
    )
}

export default DenamicStarRating