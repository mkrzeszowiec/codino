import HeroAnimation from "../hero-animation";

const PageIntro = () => {
    return (
        <section className="page-intro">
            <HeroAnimation/>

            <div className="page-intro__slide">
                <div className="container">
                    <div className="page-intro__slide__content">
                        <h2>Trusted by customers, partners and the industry</h2>
                        <a href="#" className="btn-shop"><i className="icon-right"></i>Shop now</a>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default PageIntro