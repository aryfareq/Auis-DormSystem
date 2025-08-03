function Button(props) {
  return (
    <button
      className="btn"
      style={{
        backgroundColor: '#C28900',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1.5rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        transition: 'transform 0.1s',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {props.name}
    </button>
  );
}

export default Button;
