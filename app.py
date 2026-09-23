import streamlit as st
import streamlit.components.v1 as components
from pathlib import Path

st.set_page_config(
    page_title="Madiha Mahvish | Data Science & AI/ML Portfolio",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="collapsed"
)

html_file = Path(__file__).parent / "index.html"

if html_file.exists():
    html = html_file.read_text(encoding="utf-8")
    components.html(html, height=1200, scrolling=True)
else:
    st.error("index.html not found. Please keep index.html in the same folder as app.py.")
