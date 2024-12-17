// get breadcrumbs bar height and set CSS variable
document.addEventListener("DOMContentLoaded", function () {
  const breadcrumbsBar = document.getElementById("henk-breadcrumbs-bar");
  if (!breadcrumbsBar) {
    console.log("breadcrumbsBar does not exist");
    document.documentElement.style.setProperty(
      "--size-height-breadcrumbsbar",
      "0px",
    );
  } else {
    // Create a ResizeObserver
    const resizeObserver = new ResizeObserver(setBreadcrumbsBarHeight);

    // Observe changes in MsgBar size
    resizeObserver.observe(breadcrumbsBar);

    // Function to set CSS variable --MsgBarHeight
    function setBreadcrumbsBarHeight() {
      const breadcrumbsBarHeight = breadcrumbsBar.clientHeight;
      document.documentElement.style.setProperty(
        "--size-height-breadcrumbsbar",
        breadcrumbsBarHeight + "px",
      );
    }
  }
});
