system_prompt_dis = """
You are an experienced startup founder, product researcher, and software architect.

You analyze clusters of GitHub Discussions to discover recurring developer problems that could become standalone software products or excellent portfolio projects.

The discussions have already been clustered using semantic embeddings.
Do NOT recluster them.
Do NOT summarize each discussion individually.

Your objective is to identify the single underlying developer problem shared by the majority of discussions.

Always think beyond the original repository.

Ask yourself:

"Would developers from many projects experience this same pain?"

If yes, describe the broader problem.

If no, explicitly state that the cluster mainly represents missing functionality inside a specific product rather than a standalone opportunity.

Prefer identifying markets instead of features.

Do not invent startup ideas where none exist.

Base every conclusion on recurring evidence across multiple discussions.

Ignore isolated bugs, implementation details, and one-off feature requests unless they reveal a broader developer workflow problem.

Return only the requested fields.
"""
    
user_prompt_dis = """
Analyze this GitHub Discussion cluster.

Cluster Information

Cluster ID:
{cluster_id}

Cluster Size:
{cluster_size}

Average Cluster Confidence:
{avg_probability:.3f}

Repositories Represented:
{repositories}

The discussions below are ordered by decreasing cluster confidence.
Use them as evidence, but do not let the first discussion dominate your conclusions.

Each discussion contains:

- Repository
- Category
- Upvotes
- Comments
- Confidence
- Title
- Body
- Top Comments

========================
{discussions}
========================

Determine the following.

Recurring Problem
One sentence describing the common developer problem.

Evidence Patterns
List 3-6 recurring themes observed across multiple discussions.

Workflow
What are users trying to accomplish?

Pain Points
What repeatedly frustrates users?

Root Cause
Why does this problem keep appearing?

Affected Users
Who experiences this problem?

Generalization
Can this problem exist independently of the original repository?

Answer one of:

- Yes
- Partially
- No

Explain in one sentence.

Standalone Product Potential
If the problem can exist independently, describe the broader market need.

If not, explicitly answer:

"No viable standalone product."

Existing Alternatives
List common products, workarounds, or competitors developers currently use.

Problem Category

Primary Category

Optional Secondary Category

Choose from:

- Developer Experience
- Workflow Automation
- AI Assistance
- Integrations
- Search & Discovery
- Data Management
- Collaboration
- Security
- Performance
- Reliability
- UI / UX
- Documentation
- DevOps
- Other

Project Scope

Choose exactly one.

- Small (1-2 weeks)
- Medium (1-2 months)
- Portfolio (2-3 months)
- Large (4-6 months)
- Startup-scale

Score the following from 1-10.

Metric	Why it matters
Pain Severity	Does it hurt?
Frequency	How often does it occur?
Standalone Potential	Can this exist independently?
Differentiation	Can you build something noticeably better or more focused?
MVP Feasibility	Can a solo developer build a compelling version in 2–3 months?

Briefly justify each score.

Suggested Product

Describe ONE standalone software product.

Do not describe a feature for the original application.

If no standalone product is justified, explicitly answer:

"No viable standalone product."

Keywords

Return exactly five concise keywords.
"""

final_instruction_dis = """
Every conclusion must be supported by patterns appearing across multiple discussions.

Do not overfit to a single highly upvoted discussion.

Generalize repository-specific requests into broader developer workflow problems whenever justified.

Before suggesting a product, ask yourself:

"Would someone use this product without installing the original application?"

If the answer is no, it is probably a feature request rather than a standalone product.

Do not invent startups around missing features.

If mature products already solve the problem well, state that clearly.

It is acceptable to conclude that a cluster does not represent a good standalone software opportunity.

Prefer realistic portfolio projects over ambitious startup ideas.
"""

def build_prompt_dis(cluster_id, cluster_size, avg_probability, repositories, discussions):
    formatted_user_prompt = user_prompt_dis.format(
        cluster_id=cluster_id, cluster_size=cluster_size, avg_probability=avg_probability, repositories=repositories, discussions=discussions
    )

    return formatted_user_prompt+'\n\n'+final_instruction_dis