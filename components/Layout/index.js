import Header from '../ui/Header';
import Footer from '../ui/Footer/';

export default function Layout(props) {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <Header />

      <div className='container'>{props.children}</div>

      <Footer />
    </div>
  );
}


