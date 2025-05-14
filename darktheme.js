// Tag button styles + theme switch styles
    const style = document.createElement('style');
    style.textContent = `
      :root {
        --bg: #fff;
        --text: #222;
        --card-bg: #f8f8f8;
        --card-shadow: 0 2px 8px rgba(0,0,0,0.08);
        --nav-bg: #fff;
        --footer-bg: #f8f8f8;
        --tag-bg: #f2f2f2;
        --tag-text: #333;
        --btn-bg: #f2f2f2;
        --btn-text: #333;
      }
      body {
        background: var(--bg);
        color: var(--text);
        transition: background 0.2s, color 0.2s;
      }
      header, nav {
        background: var(--nav-bg);
        color: var(--text);
      }
      nav .nav-links a {
        color: var(--text);
        text-decoration: none;
        transition: color 0.2s;
      }
      nav .nav-links a:hover {
        color:rgb(255, 255, 255);
      }
      footer {
        background: var(--footer-bg);
        color: var(--text);
      }
      .project-card {
        background: var(--card-bg);
        box-shadow: var(--card-shadow);
        color: var(--text);
      }
      .project-card .project-icon {
        position: absolute;
        top: 1.2rem;
        right: 1.2rem;
        width: 56px;
        height: 56px;
        z-index: 2;
        border-radius: 50%;
        background: #3a3a3a;
        box-shadow: 0 2px 8px rgba(0,0,0,0.10);
        object-fit: cover;
        border: 2px solid #202020;
        pointer-events: none;
      }
      .tag-btn {
        background: var(--tag-bg);
        color: var(--tag-text);
        border: none;
        border-radius: 0.5em;
        padding: 0.4em 1.1em;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
        box-shadow: 0 1px 4px rgba(0,0,0,0.04);
      }
      .tag-btn.active, .tag-btn:hover {
        background: var(--btn-bg);
        color: var(--btn-text);
      }
      .read-more-btn {
        background: var(--btn-bg);
        color: var(--btn-text);
        border: none;
        border-radius: 0.5em;
        padding: 0.5em 1.2em;
        font-size: 1em;
        font-weight: 500;
        cursor: pointer;
        margin-top: 1em;
        transition: background 0.15s, color 0.15s;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
      .read-more-btn:hover {
        background: #b22234;
        color: #fff;
      }
      /* Theme switch styles */
      .theme-switch {
        display: inline-block;
        position: relative;
        width: 48px;
        height: 26px;
        margin-left: 1em;
        vertical-align: middle;
      }
      .theme-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0; left: 0; right: 0; bottom: 0;
        background: #ccc;
        border-radius: 26px;
        transition: background 0.2s;
      }
      .slider:before {
        position: absolute;
        content: '';
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.2s;
        box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      }
      .theme-switch input:checked + .slider {
        background: #333;
      }
      .theme-switch input:checked + .slider:before {
        transform: translateX(22px);
        background: #b22234;
        box-shadow: 0 1px 8px rgba(255,224,102,0.25);
      }
      .slider {
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
      }
    `;
    document.head.appendChild(style);