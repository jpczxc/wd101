function Slider() {
    return (
      <>
        <div id="carouselExample" class="carousel slide">
            <div class="carousel-inner"><div class="carousel-item">
                <img src="https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item active">
                <img src="https://media.istockphoto.com/id/1393972058/vector/wide-abstract-luxury-background-design-web-template-business-report-smooth-gradient-light.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=3aNqgkyE0YfEDxWuHeTZBNsdwugIjTloijpyaEmae3U=" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
                <img src="https://media.istockphoto.com/id/908020928/photo/colorful-gradient-blur-background.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=xDaRaEHQhIzq3IiB1GnjkGN2TQTGgke4PBmCiI__SuE=" class="d-block w-100" alt="..."/>
            </div>
        </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>
            </button>
        </div>
      </>
    );
  }
  
  export default Slider;
  