document.getElementById("btnSearch").addEventListener("click", () => {
    const keyword = document.getElementById("search-input").value.toLowerCase();
    const filterType = document.getElementById("s-filter").value;
    const container = document.getElementById("container");

    let data = JSON.parse(localStorage.getItem("services")) || [];

    const results = data.filter(person => {
      const matchesKeyword = person.fname.toLowerCase().includes(keyword) || person.lname.toLowerCase().includes(keyword);
      const matchesService = filterType === "" || person.service === filterType;
      return matchesKeyword && matchesService;
    });

    displayResults(results);
  });

  // عرض جميع البيانات
  function displayAllServices() {
    let data = JSON.parse(localStorage.getItem("services")) || [];
    displayResults(data);
  }

  // عرض النتائج داخل container
  function displayResults(list) {
    const container = document.getElementById("container");
    container.innerHTML = "";

    if (list.length === 0) {
      container.innerHTML = "<p>No results found.</p>";
      return;
    }

    list.forEach(p => {
      container.innerHTML += `
        <div class="card p-3 mb-2">
          <h5> <strong>Full Name:</strong>${p.fname} ${p.lname}</h5>
          <p><strong>Email:</strong> ${p.email}</p>
          <p><strong>Number:</strong> ${p.phone}</p>
          <p><strong>Service:</strong> ${p.service}</p>
          <p><strong>Price:</strong> ${p.price} MAD</p>
        </div>
      `;
    });
  }

  window.addEventListener("load", displayAllServices);