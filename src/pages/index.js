import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import * as style from '../styles/index.module.scss'

const Index = () => {
	return (
		<Layout>
			<div className={style.hero}>
				<Image src="/images/index-hero.jpg" alt="hero" layout='fill' objectFit='cover' quality={90} />
				<div className={style.textContainer}>
					<h1>I&apos;m Yoshiki Kato!</h1>
					<h3>JavaScript Developer</h3>
				</div>
			</div>
			<div className={style.container}>
				<div className={style.profile}>
					<div>
						<h2>JavaScript Nerd</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus est tellus, eget porta leo tristique a. Donec hendrerit massa leo, id tempus dolor vulputate et. Pellentesque consectetur dolor placerat euismod pellentesque. Integer scelerisque, augue ac ullamcorper sodales, neque lectus tristique turpis, id luctus lectus lorem eu tortor. In imperdiet semper accumsan. Etiam pellentesque libero et scelerisque vehicula. Nam quis justo mi. Cras erat ex, rhoncus id blandit id, commodo ac leo. In hac habitasse platea dictumst. Pellentesque id sapien quis justo dapibus ornare. Proin scelerisque quam quis sapien porttitor vehicula. Fusce a vehicula sem, at rhoncus augue. Mauris eros massa, tincidunt et lobortis sed, tempor vitae ligula.</p>
					</div>
				</div>
				<Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />
			</div>
			<div className={style.skills}>
				<h2>Skills</h2>
				<div className={style.skillsContainer}> 
					<div>
						<img src="/images/javascript.svg" alt="javascript"/><span>JavaScript / 10years</span>
					</div>
					<div>
						<img src="images/react.svg" alt="react"/><span>React / 5years</span>
					</div>
					<div>
						<img src="images/gatsby.svg" alt="gatsby"/><span>Gatsby / 3years</span>
					</div>
					<div>
						<img src="images/next.svg" alt="next"/><span>Next.JS / 3years</span>
					</div>
				</div>
				<div className={style.ctaButton}>
					<Link href="/contact"><a>Make it Happen!</a></Link>
				</div>
			</div>
		</Layout>
	);
};

export default Index;
