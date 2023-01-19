import Layout from 'layouts/Main';
import PageIntro from 'components/page-intro/PageIntro';
import Products from 'components/products/Products';

const IndexPage = () => {
	return (
		<Layout>
			<PageIntro />

			<div className="container">
				<Products />
			</div>

			<section className="featured">
				<div className="container">
					<article
						style={{ backgroundImage: 'url(/images/featured-1.jpg)' }}
						className="featured-item featured-item-large"
					>
						<div className="featured-item__content">
							<h3>New arrivals are now in!</h3>
							<a href="#" className="btn btn--rounded">
								Show Collection
							</a>
						</div>
					</article>

					<article
						style={{ backgroundImage: 'url(/images/featured-2.jpg)' }}
						className="featured-item featured-item-small-first"
					>
						<div className="featured-item__content">
							<h3>Basic t-shirts $29,99</h3>
							<a href="#" className="btn btn--rounded">
								More details
							</a>
						</div>
					</article>

					<article
						style={{ backgroundImage: 'url(/images/featured-3.jpg)' }}
						className="featured-item featured-item-small"
					>
						<div className="featured-item__content">
							<h3>Sale this summer</h3>
							<a href="#" className="btn btn--rounded">
								VIEW ALL
							</a>
						</div>
					</article>
				</div>
			</section>

			<section className="section">
				<div className="container">
					<header className="section__intro">
						<h4>Testowy tytuł</h4>
					</header>

					<ul className="shop-data-items">
						<li>
							<i className="icon-shipping"></i>
							<div className="data-item__content">
								<h4>Punkt 1</h4>
								<p>Lorem ipsum dolor sit amet.</p>
							</div>
						</li>

						<li>
							<i className="icon-payment"></i>
							<div className="data-item__content">
								<h4>Punkt 2</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate dolorum provident?</p>
							</div>
						</li>

						<li>
							<i className="icon-cash"></i>
							<div className="data-item__content">
								<h4>Punkt 3</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
							</div>
						</li>

						<li>
							<i className="icon-materials"></i>
							<div className="data-item__content">
								<h4>Punkt 4</h4>
								<p>Lorem ipsum.</p>
							</div>
						</li>
					</ul>
				</div>
			</section>

			{/*<ProductsFeatured />*/}
			{/*<Subscribe />*/}
		</Layout>
	);
};

export default IndexPage;
