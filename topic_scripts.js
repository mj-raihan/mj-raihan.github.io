// fetch("sidebar_common.html")
//   .then(response => response.text())
//   .then(data => document.getElementById("sidebar_common-container").innerHTML = data)
//   .catch(error => console.error("Error loading sidebar:", error));

document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar_common.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-common-container").innerHTML = data;
            // attachSidebarEvents(); // Ensure event listeners are attached
        });
});


function toggleTOC() {
    document.querySelector(".toc").classList.toggle("show");
  }

  const tocList = document.getElementById('toc-list');
  const headings = document.querySelectorAll('article h2, article h3');
  let lastH2 = null;

  headings.forEach(heading => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${heading.id}`;
    a.textContent = heading.textContent;

    if (heading.tagName === 'H2') {
      li.appendChild(a);
      tocList.appendChild(li);
      lastH2 = li;
    } else if (heading.tagName === 'H3' && lastH2) {
      let subList = lastH2.querySelector('ul');
      if (!subList) {
        subList = document.createElement('ul');
        lastH2.appendChild(subList);
      }
      const subItem = document.createElement('li');
      subItem.appendChild(a);
      subList.appendChild(subItem);
    }
  });

  // IntersectionObserver for active section
  const tocLinks = document.querySelectorAll('.toc a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const tocLink = document.querySelector(`a[href="#${entry.target.id}"]`);
      if (entry.isIntersecting) {
        tocLinks.forEach(link => link.classList.remove('active'));
        tocLink.classList.add('active');
      }
    });
  }, { threshold: 0.5 });

  headings.forEach(heading => observer.observe(heading));

  // Smooth scrolling
  document.querySelectorAll('.toc a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

