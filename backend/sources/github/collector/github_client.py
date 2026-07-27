from github import Github
from dotenv import load_dotenv
import os

load_dotenv()

TOKEN = os.getenv("problem_mining")

if TOKEN is None:
    raise ValueError("GitHub token not found!")

github_client = Github(TOKEN)
