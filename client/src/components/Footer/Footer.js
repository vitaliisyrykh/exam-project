import React, {Component} from 'react';
import styles from './Footer.module.sass';
import CONSTANTS from '../../constants';


class Footer extends Component {

    topFooterItemsRender = (item) => {
        return (
            <div key={item.title}>
                <h4>{item.title}</h4>
                {item.items.map(i => <a key={i} href={item.href}>{i}</a>)}
            </div>
        );
    };

    topFooterRender() {
        return CONSTANTS.FooterItems.map(item => this.topFooterItemsRender(item))
    };

    render() {
        return (
            <div className={styles.footerContainer}>
                <div className={styles.footerTop}>
                    <div>
                        {this.topFooterRender()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;
