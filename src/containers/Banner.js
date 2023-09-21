import { BannerContent } from '../components/BannerContent';
import { BannerImage } from '../components/BannerImage';


function Banner () {
    return (
        <div className="banner">
                <BannerContent />
                <BannerImage />
        </div>
    )
}

export { Banner };