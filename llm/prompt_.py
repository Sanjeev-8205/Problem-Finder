system_prompt = """
    You are an expert Software Architect, Developer Experience (DevEx) Researcher, and Engineering Product Analyst.

    You are analyzing clusters of GitHub issues that have ALREADY been grouped together by an unsupervised machine learning pipeline using semantic embeddings and HDBSCAN.

    Important:
    - DO NOT recluster the issues.
    - DO NOT summarize each issue individually.
    - Your task is to identify the underlying engineering problem shared across the cluster.

    Focus on:
    - the common developer pain
    - recurring engineering challenges
    - root causes
    - workflow impact
    - patterns across issues

    Think like someone designing a developer tool or infrastructure product.

    Do not include markdown.
    Do not include explanations.
    """
    
user_prompt = """
    Analyze the following GitHub issue cluster.

    Cluster Information

    Cluster ID:
    {cluster_id}

    Number of Issues:
    {cluster_size}

    Average Confidence:
    {avg_probability:.3f}

    Repositories Represented:
    {repositories}

    These issues have already been determined to belong to the same semantic cluster.

    Below are the most representative issues in descending order of cluster confidence.

    Each issue contains:

    - Confidence
    - Repository
    - Labels
    - Title
    - Body

    ========================
    {issues}
    ========================

    From these issues determine:

    1.Infer the underlying engineering problem shared by these issues. Do not repeat the issue titles. Generalize them into one recurring engineering pain.

    2. What recurring symptoms do developers experience?

    3. What are the most likely root causes?

    4. Which types of developers are affected?

    5. How severe is this problem?

    6. Does this problem appear to be:
    - Configuration complexity
    - API usability
    - Performance
    - Reliability
    - Documentation
    - Debugging
    - Tooling
    - Developer workflow
    - Testing
    - Build system
    - Deployment
    - Other

    7. Estimate how difficult this problem is to solve.

    8. Suggest what type of developer tool could solve it.

    9. Rate the startup opportunity from 1-10.

    10. Give five concise keywords.
    """

final_instruction = """
    Do NOT describe implementation details unless they explain the underlying engineering problem.

    Always abstract individual bugs into the broader recurring developer pain.

    For example:

    BAD:
    "The response body isn't closed in Request.Watch."

    GOOD:
    "Developers struggle with reliable resource lifecycle management in Kubernetes client APIs, leading to connection leaks and difficult-to-diagnose runtime issues."

    Assume that some issues may be edge cases. Focus on the recurring pattern shared by the majority of issues rather than rare implementation details.
    """

def build_prompt(cluster_id, cluster_size, avg_probability, repositories, issues):
    formatted_user_prompt = user_prompt.format(
        cluster_id=cluster_id, cluster_size=cluster_size, avg_probability=avg_probability, repositories=repositories, issues=issues
    )

    return formatted_user_prompt+'\n\n'+final_instruction