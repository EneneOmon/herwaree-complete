import React, { CSSProperties } from 'react';

const ComingSoon: React.FC = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.header}><strong>Coming Soon!</strong></h1>
            <p style={styles.description}>
                We're working hard to bring something amazing. Stay tuned! 😁😊😉
            </p>
            <footer style={styles.footer}>
                <p>© {new Date().getFullYear()} Herwaree. All rights reserved.</p>
            </footer>
        </div>
    );
};

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        color: '#333',
    },
    header: {
        fontSize: '3rem',
    },
    description: {
        fontSize: '1.5rem',
        margin: '20px 0',
    },
    footer: {
        marginTop: 'auto',
        padding: '20px',
        fontSize: '1rem',
        color: '#666',
    },
};

export default ComingSoon;
