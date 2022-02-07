/* ==== Props ==== */
import PropTypes from 'prop-types';

const NavigationComponent = props => {
    const navs = [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "For Lorenzo De Francesco",
            link: "/info",
        },
    ];

    const Nav = props => {
        const { title, link } = props;
        return <li><a href={link}>{title}</a></li>
    };

    Nav.defaultProps = {
        title: null,
        link: null,
    };

    const { string } = PropTypes;

    Nav.propTypes = {
      title: string,
      link: string,
    };

    return(
        <nav>
            {navs.map((nav, index) => {
                const id = `${index + 1}`;
                return <Nav key={id} {...nav} />;
            })}
        </nav>
    )
}

NavigationComponent.defaultProps = {
    nav: null,
};

const { array } = PropTypes;

NavigationComponent.propTypes = {
    nav: array,
};

const Navigation = NavigationComponent;

export default Navigation;
