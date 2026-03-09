class JdgmReviews extends HTMLElement {
  connectedCallback() {
    this.style.display = "block";
    this.style.minHeight = "1200px";

    this.innerHTML = `
      <div class="jdgm-widget jdgm-all-reviews-widget">
        <div class="jdgm-all-reviews__body"></div>
      </div>
    `;

    const initJudgeMe = () => {
      if (window.jdgm && typeof window.jdgm.init === "function") {
        window.jdgm.init();
      } else {
        setTimeout(initJudgeMe, 300);
      }
    };

    initJudgeMe();
  }
}

customElements.define("jdgm-reviews", JdgmReviews);
