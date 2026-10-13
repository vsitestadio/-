const graph =
  document.querySelector(".about-graph");


if (graph) {

  const observer =
    new IntersectionObserver(
      (entries, observer) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "is-active"
            );

            observer.unobserve(
              entry.target
            );

          }

        });

      },
      {
        threshold: 0.35
      }
    );


  observer.observe(graph);

}