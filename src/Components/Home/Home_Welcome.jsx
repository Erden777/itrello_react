import Carousel from "react-bootstrap/Carousel";

function WelcomePage(props) {
  return (
    <>
      <Carousel className="mt-3">
        <Carousel.Item interval={1000}>
          <img
            height="450"
            className="d-block w-100"
            src="https://www.ntaskmanager.com/wp-content/uploads/2019/01/task-management-skills-blog-header-1.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: "#21598A" }}>
              Manage with your tasks
            </h3>
            <button className="btn btn-light">REGISTER NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            height="450"
            className="d-block w-100"
            src="https://img.officetimeline.com/website/Content/images/articles/PM-Task-Management/task-management-hero-banner.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: "#21598A" }}>
              Manage with your tasks
            </h3>
            <button className="btn btn-light">REGISTER NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height="450"
            className="d-block w-100"
            src="https://20o8nn37v3mzb7unq3fsj61e-wpengine.netdna-ssl.com/wp-content/uploads/2019/05/Project-Team-Task-Management.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 style={{ backgroundColor: "#21598A" }}>
              Manage with your tasks
            </h3>
            <button className="btn btn-light">REGISTER NOW</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <ul class="list-group mt-4">
        <li class="list-group-item">Quick Access</li>
        <li class="list-group-item">Great Management</li>
        <li class="list-group-item">Statistics</li>
        <li class="list-group-item">Cloud Service</li>
      </ul>
    </>
  );
}

export default WelcomePage;
