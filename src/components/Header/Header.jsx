import style from './Header.module.css';
import Layout from '../Layout';
import Logo from './Logo';
import Title from './Title';
import Search from './Search';
import Auth from './Auth';

export const Header = () =>
  (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo />
          <Title text='Blogget' />
          <Search />
          <Auth auth={false} />
        </div>
      </Layout>
    </header>
  );
