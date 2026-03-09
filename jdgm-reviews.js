class JdgmReviews extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="jdgm-widget jdgm-all-reviews-widget">
        <div class="jdgm-all-reviews__body"></div>
      </div>
    `;

    if (window.jdgm && typeof window.jdgm.init === "function") {
      window.jdgm.init();
    }
  }
}

customElements.define("jdgm-reviews", JdgmReviews);
