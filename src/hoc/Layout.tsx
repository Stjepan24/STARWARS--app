import React from 'react';
import Loader from '../components/Loader';
import MainNavbar from '../components/MainNavbar';
import { ILoader } from '../helpers/interfaces/ILoader';
import { INavbar } from '../helpers/interfaces/INavbar';

const Layout = <P extends object>(Component: React.ComponentType<P>) =>
    class Layout extends React.Component<P & ILoader> {
        render() {
            const { isLoad, ...props } = this.props;

            if (!isLoad) {
                return <Loader />;
            }

            return (
                <>
                    <MainNavbar {...(props as INavbar)} />
                    <Component {...(props as P)} />
                </>
            );
        }
    };

export default Layout;
