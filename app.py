import streamlit as st
from pathlib import Path

st.set_page_config(
    page_title="Madiha Mahvish | Data Science & AI/ML",
    page_icon="🚀",
    layout="wide"
)

html_file = Path("index.html")

if html_file.exists():
    html = html_file.read_text(encoding="utf-8")
    st.components.v1.html(html, height=1200, scrolling=True)
else:
    st.error("index.html not found")
