// Shipping Section Start
const shippingOptions = document.querySelectorAll(".shipping-option");
shippingOptions.forEach((option) => {
  option.addEventListener("click", () => {
    shippingOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});
// Shipping Section End
// Review Slider Start
const reviews = document.getElementById("reviews");
const total = reviews.children.length;
let index = 0;

// Function to update the slide position
function updateSlide() {
  reviews.style.transform = `translateX(-${index * 100}%)`;
}

// Auto-slide functionality
function startAutoSlide() {
  setInterval(() => {
    index = (index + 1) % total;
    updateSlide();
  }, 5000); // Change slide every 5 seconds
}

// Initialize
updateSlide();
startAutoSlide();
window.addEventListener("resize", updateSlide);
// Review Slider End
// For Notification start
const notifications = [
  { name: "Ko**st", img: "./assets/images/purchase.png", minutesAgo: 2 },
  { name: "Ko**st", img: "./assets/images/purchase.png", minutesAgo: 20 },
  { name: "Ko**st", img: "./assets/images/purchase.png", minutesAgo: 30 },
];

let indexNotice = 0;
function showNotification() {
  const container = document.getElementById("sales-notification-container");
  const data = notifications[indexNotice];

  const notif = document.createElement("div");
  notif.className = "sales-notification";
  notif.innerHTML = `
        <img src="${data.img}" alt="">
        <div class="content">
          <b>${data.name}</b> 
          <small>got this!</small> <br/>
          <span class="time">${data.minutesAgo} minutes ago</span>
        </div>
        <span class="close-btn">&times;</span>
      `;

  // close button
  notif.querySelector(".close-btn").addEventListener("click", () => {
    notif.remove();
  });

  container.appendChild(notif);

  // auto remove after 5s if not closed
  setTimeout(() => {
    if (document.body.contains(notif)) {
      notif.remove();
    }
  }, 5000);

  indexNotice = (indexNotice + 1) % notifications.length;
}

// show every 6s
setInterval(showNotification, 6000);
// first one
showNotification();

// For Notification End

/**For Country and State Start */
const countries = [
  { code: "BD", name: "Bangladesh", flag: "🇧🇩", pCode: "+880" },
  { code: "IN", name: "India", flag: "🇮🇳", pCode: "+91" },
  {
    code: "US",
    name: "United States",
    flag: "🇺🇸",
    pCode: "+1",
    states: [
      { code: "CA", name: "California" },
      { code: "NY", name: "New York" },
      { code: "TX", name: "Texas" },
      { code: "FL", name: "Florida" },
      { code: "IL", name: "Illinois" },
    ],
  },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧", pCode: "+44" },
  { code: "CA", name: "Canada", flag: "🇨🇦", pCode: "+1" },
  { code: "AU", name: "Australia", flag: "🇦🇺", pCode: "+61" },
  { code: "BE", name: "Belgium", flag: "🇧🇪", pCode: "+32" },
  { code: "BM", name: "Bermuda", flag: "🇧🇲", pCode: "+1" },
  { code: "BT", name: "Bhutan", flag: "🇧🇹", pCode: "+975" },
  { code: "BR", name: "Brazil", flag: "🇧🇷", pCode: "+55" },
  { code: "CN", name: "China", flag: "🇨🇳", pCode: "+86" },
  { code: "FR", name: "France", flag: "🇫🇷", pCode: "+33" },
  { code: "DE", name: "Germany", flag: "🇩🇪", pCode: "+49" },
  { code: "IT", name: "Italy", flag: "🇮🇹", pCode: "+39" },
  { code: "JP", name: "Japan", flag: "🇯🇵", pCode: "+81" },
  { code: "KR", name: "South Korea", flag: "🇰🇷", pCode: "+82" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾", pCode: "+60" },
  { code: "NP", name: "Nepal", flag: "🇳🇵", pCode: "+977" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱", pCode: "+31" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿", pCode: "+64" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰", pCode: "+92" },
  { code: "RU", name: "Russia", flag: "🇷🇺", pCode: "+7" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦", pCode: "+966" },
  { code: "SG", name: "Singapore", flag: "🇸🇬", pCode: "+65" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦", pCode: "+27" },
  { code: "ES", name: "Spain", flag: "🇪🇸", pCode: "+34" },
  { code: "LK", name: "Sri Lanka", flag: "🇱🇰", pCode: "+94" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭", pCode: "+41" },
  { code: "TH", name: "Thailand", flag: "🇹🇭", pCode: "+66" },
  { code: "TR", name: "Turkey", flag: "🇹🇷", pCode: "+90" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪", pCode: "+971" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳", pCode: "+84" },
];

const select = document.getElementById("country");
const stateGroup = document.getElementById("state-group");
const stateSelect = document.getElementById("state");
const codeSelect = document.getElementById("code");
const codeSelectEl = document.getElementById("code-select");
const codeInput = document.getElementById("code-input");
const codePanelInner = document.getElementById("code-panel-inner");
const codeList = document.getElementById("code-list");
const countrySelectEl = document.getElementById("country-select");
const countryInput = document.getElementById("country-input");
const countryPanelInner = document.getElementById("country-panel-inner");
const countryList = document.getElementById("country-list");
const stateSelectEl = document.getElementById("state-select");
const stateInput = document.getElementById("state-input");
const statePanelInner = document.getElementById("state-panel-inner");
const stateList = document.getElementById("state-list");

// Clear existing options (keep placeholder via render function)
select.innerHTML = "";

// Build items from provided countries object (expects code, name, flag)
const countryItems = countries.map((c) => ({
  code: c.code,
  name: c.name,
  flag: c.flag,
  states: c.states,
}));

function renderCountryOptions(list, preserveValue = true) {
  const previousValue = preserveValue ? select.value : "";
  select.innerHTML = "";
  const ph = document.createElement("option");
  ph.value = "";
  ph.hidden = true;
  ph.textContent = "Select country";
  select.appendChild(ph);

  list
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((c) => {
      const option = document.createElement("option");
      option.value = c.code;
      option.textContent = `${c.flag} ${c.name}`;
      select.appendChild(option);
    });

  if (
    preserveValue &&
    previousValue &&
    list.some((c) => c.code === previousValue)
  ) {
    select.value = previousValue;
  } else {
    select.value = "";
    // Reset state if selection cleared
    if (typeof updateStateOptions === "function") updateStateOptions();
  }
}

// Initial render
renderCountryOptions(countryItems, false);

// Populate phone code options from countries
function populatePhoneCodeOptions() {
  if (!codeSelect) return;
  const uniqueByPCode = new Map();
  countries.forEach((c) => {
    if (c.pCode && !uniqueByPCode.has(c.pCode)) {
      uniqueByPCode.set(c.pCode, c);
    }
  });

  codeSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.hidden = true;
  codeSelect.appendChild(placeholder);

  Array.from(uniqueByPCode.values())
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
    .forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.pCode;
      opt.textContent = `(${c.pCode}) ${c.name}`;
      codeSelect.appendChild(opt);
    });
}

populatePhoneCodeOptions();

// Phone code combobox behavior
function openCodePanel() {
  codePanelInner.style.display = "block";
}

function closeCodePanel() {
  codePanelInner.style.display = "none";
  renderCodeList();
}

function setSelectedCode(pCode) {
  if (!pCode) return;
  codeSelect.value = pCode;
  const country = countries.find((c) => c.pCode === pCode);
  codeInput.value = country ? `(${pCode}) ${country.name}` : pCode;
}

function renderCodeList(filter = "") {
  const q = filter.trim().toLowerCase();
  const uniqueByPCode = new Map();
  countries.forEach((c) => {
    if (c.pCode && !uniqueByPCode.has(c.pCode)) {
      uniqueByPCode.set(c.pCode, c);
    }
  });
  const items = Array.from(uniqueByPCode.values())
    .sort((a, b) => (a.name || "").localeCompare(b.name || ""))
    .filter((c) =>
      q
        ? (c.name || "").toLowerCase().includes(q) ||
          (c.pCode || "").toLowerCase().includes(q)
        : true
    );

  codeList.innerHTML = "";
  items.forEach((c) => {
    const li = document.createElement("li");
    li.textContent = `(${c.pCode}) ${c.name}`;
    li.setAttribute("data-code", c.pCode);
    li.style.padding = "8px 12px";
    li.style.cursor = "pointer";
    li.addEventListener("click", () => {
      setSelectedCode(c.pCode);
      closeCodePanel();
    });
    li.addEventListener("mouseenter", () => (li.style.background = "#f7f7f7"));
    li.addEventListener(
      "mouseleave",
      () => (li.style.background = "transparent")
    );
    codeList.appendChild(li);
  });
}

// Initial render for code list and open/filter handlers
renderCodeList("");
codeInput.addEventListener("focus", () => {
  const isOpen =
    codePanelInner.style.display !== "none" &&
    codePanelInner.style.display !== "";
  if (isOpen) {
    closeCodePanel();
  } else {
    openCodePanel();
  }
});
codeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openCodePanel();
  }
});
codeInput.addEventListener("input", () => {
  renderCodeList(codeInput.value);
});
document.addEventListener("click", (e) => {
  if (codeSelectEl && !codeSelectEl.contains(e.target)) {
    closeCodePanel();
  }
});

// Custom dropdown behavior (in-panel search)
function openCountryPanel() {
  countryPanelInner.style.display = "block";
}

function closeCountryPanel() {
  countryPanelInner.style.display = "none";
  renderCountryList(countryItems);
}

function setSelectedCountry(code) {
  const item = countryItems.find((c) => c.code === code);
  if (!item) return;
  select.value = item.code;
  countryInput.value = `${item.flag} ${item.name}`;
  if (item.pCode && codeSelect) {
    codeSelect.value = item.pCode;
    setSelectedCode(item.pCode);
  }
  if (typeof updateStateOptions === "function") updateStateOptions();
}

function renderCountryList(list) {
  countryList.innerHTML = "";
  list
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((c) => {
      const li = document.createElement("li");
      li.textContent = `${c.flag} ${c.name}`;
      li.setAttribute("data-code", c.code);
      li.style.padding = "8px 12px";
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        setSelectedCountry(c.code);
        closeCountryPanel();
      });
      li.addEventListener(
        "mouseenter",
        () => (li.style.background = "#f7f7f7")
      );
      li.addEventListener(
        "mouseleave",
        () => (li.style.background = "transparent")
      );
      countryList.appendChild(li);
    });
}

// Initial custom list render and default display
renderCountryList(countryItems);
countryInput.addEventListener("focus", () => {
  const isOpen =
    countryPanelInner.style.display !== "none" &&
    countryPanelInner.style.display !== "";
  if (isOpen) {
    closeCountryPanel();
  } else {
    openCountryPanel();
  }
});
countryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    openCountryPanel();
  }
});
countryInput.addEventListener("input", () => {
  const q = countryInput.value.trim().toLowerCase();
  const filtered = q
    ? countryItems.filter(
        (c) =>
          c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q)
      )
    : countryItems;
  renderCountryList(filtered);
});
document.addEventListener("click", (e) => {
  if (!countrySelectEl.contains(e.target)) {
    closeCountryPanel();
  }
});

// Sync display if a selection exists
if (select.value) {
  setSelectedCountry(select.value);
}

function updateStateOptions() {
  const selectedCode = select.value;
  const country = countries.find((c) => c.code === selectedCode);

  // reset state select
  stateSelect.innerHTML = "";
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.hidden = true;
  placeholder.textContent = "Select state";
  stateSelect.appendChild(placeholder);

  if (country && Array.isArray(country.states) && country.states.length) {
    country.states.forEach((s) => {
      const opt = document.createElement("option");
      opt.value = s.code;
      opt.textContent = s.name;
      stateSelect.appendChild(opt);
    });
    stateGroup.style.display = "block";
    stateSelect.required = true;
    // Reset custom state input and list on country change
    stateInput.value = "";
    renderStateList(country.states);
  } else {
    stateGroup.style.display = "none";
    stateSelect.required = false;
    stateInput && (stateInput.value = "");
    stateList && (stateList.innerHTML = "");
  }

  // Sync phone code with selected country
  if (codeSelect) {
    if (country && country.pCode) {
      codeSelect.value = country.pCode;
      setSelectedCode(country.pCode);
    } else {
      codeSelect.value = "";
      codeInput && (codeInput.value = "");
    }
  }
}

select.addEventListener("change", updateStateOptions);

// State custom dropdown behavior
function openStatePanel() {
  statePanelInner.style.display = "block";
}

function closeStatePanel() {
  statePanelInner.style.display = "none";
  const selectedCode = select.value;
  const country = countries.find((c) => c.code === selectedCode);
  const list = country && Array.isArray(country.states) ? country.states : [];
  renderStateList(list);
}

function setSelectedState(code) {
  const selectedCode = select.value;
  const country = countries.find((c) => c.code === selectedCode);
  if (!country || !Array.isArray(country.states)) return;
  const item = country.states.find((s) => s.code === code);
  if (!item) return;
  stateSelect.value = item.code;
  stateInput.value = item.name;
}

function renderStateList(list) {
  stateList.innerHTML = "";
  list
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((s) => {
      const li = document.createElement("li");
      li.textContent = s.name;
      li.setAttribute("data-code", s.code);
      li.style.padding = "8px 12px";
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        setSelectedState(s.code);
        closeStatePanel();
      });
      li.addEventListener(
        "mouseenter",
        () => (li.style.background = "#f7f7f7")
      );
      li.addEventListener(
        "mouseleave",
        () => (li.style.background = "transparent")
      );
      stateList.appendChild(li);
    });
}

stateInput &&
  stateInput.addEventListener("focus", () => {
    const isOpen =
      statePanelInner.style.display !== "none" &&
      statePanelInner.style.display !== "";
    if (isOpen) {
      closeStatePanel();
    } else {
      openStatePanel();
    }
  });
stateInput &&
  stateInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openStatePanel();
    }
  });
stateInput &&
  stateInput.addEventListener("input", () => {
    const q = stateInput.value.trim().toLowerCase();
    const selectedCode = select.value;
    const country = countries.find((c) => c.code === selectedCode);
    const list = country && Array.isArray(country.states) ? country.states : [];
    const filtered = q
      ? list.filter(
          (s) =>
            s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q)
        )
      : list;
    renderStateList(filtered);
  });
document.addEventListener("click", (e) => {
  if (stateSelectEl && !stateSelectEl.contains(e.target)) {
    closeStatePanel();
  }
});
/**For Country and State End */
