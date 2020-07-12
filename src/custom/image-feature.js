class ImageCovid extends HTMLElement {
    connectedCallback() {
        this.src = this.getAttribute("src") || null;
        this.caption = this.getAttribute("caption") || null;

        this.innerHTML = `
          <figure>
            <img src="https://cdn.dbqschools.org/wp-content/uploads/2014/12/header-food-nutrition-01-710x200.jpg">
          </figure>
        `;
    }
}

customElements.define("image-feature", ImageCovid);