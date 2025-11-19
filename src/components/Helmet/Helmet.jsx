const Helmet = (props) => {
  document.title = "Dendro - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
