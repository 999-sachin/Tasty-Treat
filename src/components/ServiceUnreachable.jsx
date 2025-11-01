const ServiceUnreachable = ({ message }) => {
  return (
    <div className="service-unreachable">
      <h3>Service Unreachable</h3>
      <p>{message}</p>
    </div>
  );
};

export default ServiceUnreachable;
