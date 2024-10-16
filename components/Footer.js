const footerStyle = {
  marginTop: '2rem',
  padding: '1rem 0',
  borderTop: '1px solid #eaeaea',
  textAlign: 'center',
  fontSize: '0.9rem',
  color: '#666',
};

const linkStyle = {
  color: '#0070f3',
  textDecoration: 'none',
  marginLeft: '0.5rem',
};

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>
        Inspired by Prof. Ma {'|'} @DoomProphet
      </p>
      <p>
        Based on an equation by Prof. Chan {'|'}
        <a href="https://github.com/MichaelChan2417" target="_blank" rel="noopener noreferrer" style={linkStyle}>
          @MichaelChan2417
        </a>
      </p>
    </footer>
  );
}
