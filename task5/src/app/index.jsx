import { useRoute } from '../lib';
import { PageDreams } from '../pages/dreams';
import { PageFriends } from '../pages/friends';
import { PageIdeas } from '../pages/ideas';
import { Footer } from '../ui/components/Footer';
import { Header } from '../ui/components/Header';

import styles from './index.module.css';

export const App = () => {
    const route = useRoute();

    return (
        <>
            <Header />
            <main className={styles.main}>
                {route === 'DREAMS' && <PageDreams />}
                {route === 'IDEAS' && <PageIdeas />}
                {route === 'FRIENDS' && <PageFriends />}
            </main>
            <Footer />
        </>
    );
};
