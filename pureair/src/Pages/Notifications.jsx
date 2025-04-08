function Notifications() {
    const notificationStyle = {
        backgroundColor: 'gray',
        color: 'white',
        padding: '20px',
        fontFamily: 'Montserrat, sans-serif',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowY: 'auto',
    };

    const cardStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // yarı saydam beyaz
        padding: '16px',
        borderRadius: '12px',
        marginBottom: '12px',
        width: '80%',
        maxWidth: '600px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    };

    const headingStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
    };

    return (
        <div style={notificationStyle}>
            <h2 style={headingStyle}>🔔 Notifications</h2>

            <div style={{ ...cardStyle, backgroundColor: 'rgba(255, 0, 0, 0.2)' }}>
                ⚠️ High PM2.5 levels detected in <strong>Kadıköy</strong>. Limit outdoor activity.
            </div>

            <div style={{ ...cardStyle, backgroundColor: 'rgba(255, 255, 0, 0.2)' }}>
                🌬️ Moderate air pollution in <strong>Beşiktaş</strong>. Sensitive groups should be cautious.
            </div>

            <div style={{ ...cardStyle, backgroundColor: 'rgba(0, 255, 0, 0.2)' }}>
                ✅ Air quality is good in <strong>Üsküdar</strong>. No precautions needed.
            </div>
        </div>
    );
}

export default Notifications;
