# Shipquick: Meta-Agentic System Architecture

**Version:** 1.0.0  
 **Created:** 2026-01-10  
 **Purpose:** Complete architectural blueprint for building generalized multi-agent AI systems

---

## **Table of Contents**

1. Executive Summary and Vision  
2. Foundational Concepts  
3. Architectural Philosophy  
4. Critical Context Management System  
5. Data Persistence and Tracking Standards  
6. Agent Architecture Specification  
7. Workflow Architecture Specification  
8. Master Orchestrator Design  
9. Module Structure and Organization  
10. The Meta-System: How Shipquick Generates Systems  
11. Configuration and Customization Patterns  
12. Quality Standards and Feedback Loops  
13. Inter-Agent Communication and Collaboration  
14. Implementation Guide for Developers  
15. Usage Patterns and Best Practices  
16. Critical Rules: Do's and Don'ts  
17. Data Relationships and Schema Reference  
18. Troubleshooting and Debugging  
19. Extension and Customization Framework  
20. Complete Templates and Examples  
21. Security Architecture  
22. Error Handling and Recovery  
23. LLM Integration Architecture  
24. Testing Framework  
25. Scalability Architecture  
26. Schema Versioning and Migration  
27. Observability and Monitoring  
28. Data Portability  
29. Concurrency Management  
30. Implementation Roadmap
31. Persistent Planning Pattern

---

## **Executive Summary and Vision**

### **What is Shipquick?**

Shipquick is a meta-agentic system builder, which means it is a sophisticated framework for creating specialized multi-agent AI systems tailored to any business goal or complex objective. Think of Shipquick as a factory that produces custom AI assistant teams, where each team is specifically designed to help someone achieve a particular outcome through coordinated specialist agents working together.

When we say "meta-agentic," we mean that Shipquick operates at a higher level than typical AI systems. Rather than being a single assistant that tries to do everything, Shipquick creates entire ecosystems of specialized AI agents that collaborate intelligently. Each agent in a Shipquick-generated system is hyper-focused on one domain, has a distinct personality and expertise, and knows how to work with other agents to accomplish complex multi-step objectives.

The fundamental insight behind Shipquick is that complex goals require structured, multi-phase approaches with different types of expertise at different stages. A single generalist AI assistant can help with many tasks, but when you need sustained, disciplined execution over weeks or months toward a sophisticated goal, you need something more powerful. You need a team of specialists who maintain context across sessions, learn from your interactions, and guide you through proven workflows without taking shortcuts or hallucinating steps.

### **Why Shipquick Exists**

Traditional AI assistance suffers from several critical limitations when applied to complex, long-term goals. First, there is the memory problem where AI assistants treat each conversation as largely independent, forcing users to constantly re-establish context and explain their situation repeatedly. Second, there is the expertise depth problem where a single generalist assistant cannot match the quality of guidance that domain specialists provide because it is trying to be adequate at everything rather than excellent at specific things. Third, there is the workflow discipline problem where AI assistants often try to be helpful by anticipating steps or skipping parts they think are unnecessary, which leads to incomplete execution and missed critical details.

Fourth, there is the progress tracking problem where users lose visibility into where they are in complex multi-week journeys because there is no structured way to monitor completed milestones, identify gaps, or understand what should come next. Fifth, there is the quality assurance problem where AI-generated outputs lack systematic evaluation against domain standards, leaving users uncertain whether their work is actually ready for external audiences. Sixth, there is the learning problem where the system does not accumulate wisdom about the user's preferences, strengths, weaknesses, and growth over time, making each interaction feel equally generic regardless of history.

Shipquick exists to solve all these problems by providing an architectural framework that enables the creation of sophisticated multi-agent systems with memory, specialization, workflow discipline, progress tracking, quality assurance, and continuous learning. Rather than building these capabilities from scratch for each new use case, Shipquick provides proven patterns and structures that can be instantiated for any business goal.

### **What Problems Does Shipquick Solve?**

Shipquick addresses the challenge of translating complex business objectives into executable AI assistance systems. When someone has a goal like learning a new professional skill, building a portfolio of work, preparing for career transitions, launching a creative project, or systematically improving in a specific domain, they need more than occasional advice from an AI assistant. They need a structured system that guides them through proven processes, maintains context about their journey, provides specialist expertise at each phase, and helps them produce high-quality outputs consistently.

The problem is that designing such systems requires deep expertise in agentic architectures, workflow engineering, context management, and human-AI collaboration patterns. Most people who could benefit from these systems lack the technical knowledge to build them, and even experienced developers would need weeks to architect something robust. Shipquick solves this by providing a complete blueprint and meta-system that can analyze a business goal and generate all the necessary components for a working multi-agent system tailored to that goal.

### **The Shipquick Vision**

The vision for Shipquick is to democratize access to sophisticated multi-agent AI systems by making them as easy to create as filling out a detailed form. Anyone with a well-defined goal should be able to describe what they want to accomplish, answer questions about their constraints and preferences, and receive a complete working agentic system with specialist agents, structured workflows, context management, and quality assurance built in.

This vision extends beyond simple productivity tools to enabling AI-assisted mastery in any domain. Whether someone wants to become a expert in a technical field, build a body of creative work, systematically improve their business, or achieve any complex multi-month objective, Shipquick provides the infrastructure to make that journey structured, trackable, and successful. The system learns as the user progresses, adapts its guidance based on demonstrated competence, and maintains the continuity that turns sporadic effort into sustained achievement.

Over time, Shipquick should become a platform where proven system designs for common goals can be shared, customized, and improved by a community of users. The architectural patterns established here should enable innovation in how humans and AI agents collaborate to achieve complex objectives that require sustained intelligent effort over extended time periods.

---

## **Foundational Concepts**

Before diving into the architecture, it is essential to establish a shared vocabulary and understanding of the core concepts that Shipquick builds upon. This section explains each foundational idea in detail so that implementers understand not just what to build but why each component matters and how they fit together.

### **Agentic Systems**

An agentic system is fundamentally different from a simple chatbot or question-answering AI. The term "agentic" comes from the concept of agency, which means the capacity to act independently toward goals. An agentic system embodies a persona with specific expertise, maintains awareness of objectives and context, executes multi-step processes with autonomy, makes decisions within its domain of responsibility, and coordinates with other agents when tasks span multiple domains.

Think of an agentic system as creating a virtual expert consultant who has deep knowledge in a specific area, understands your current situation and goals, can execute complex workflows without constant hand-holding, makes informed judgments about trade-offs and priorities within their specialty, and knows when to bring in other specialists for aspects outside their expertise. This is markedly different from a conversational AI that simply responds to individual queries without maintaining goal orientation or executing sustained processes.

In Shipquick, we create systems composed of multiple agents rather than a single monolithic assistant. Each agent represents a distinct role with specialized knowledge and a unique approach to problems. When you interact with a Shipquick-generated system, you are effectively working with a team of virtual specialists rather than a single generalist assistant. This specialization enables deeper expertise, more focused guidance, and clearer division of responsibilities across complex objectives.

### **Orchestrators Versus Specialist Agents**

Within any Shipquick system, there is a crucial distinction between the orchestrator and specialist agents. The orchestrator serves as the master coordinator who understands the full landscape of available specialists, routes requests to appropriate agents based on context and need, maintains awareness of the overall goal and progress, provides meta-level guidance about what to focus on next, and coordinates multi-agent collaboration when necessary.

You can think of the orchestrator as a chief of staff or project manager who knows all the specialists on the team, understands what each can do, keeps track of the overall objective and timeline, and makes intelligent decisions about who should handle each type of request. The orchestrator does not try to execute specialized work itself but instead ensures users are always working with the right specialist for their current need.

Specialist agents, by contrast, are hyper-focused on specific domains. Each specialist has deep expertise in one area, provides detailed guidance and execution within that domain, maintains their own working context and state, executes workflows specific to their specialty, and collaborates with other specialists when their work intersects. For example, in a system designed to help someone build a technical portfolio, you might have a Design Specialist who focuses on visual presentation and user experience, a Writing Specialist who helps craft compelling narratives and documentation, a Technical Implementation Specialist who guides code development and system architecture, and a Quality Assurance Specialist who evaluates work against professional standards.

The power of this separation is that users get depth of expertise appropriate to each task while maintaining coherent overall guidance. The orchestrator prevents users from getting lost in specialist details by maintaining big-picture awareness, while specialists prevent superficial work by providing depth and rigor within their domains.

### **Workflows and Multi-Step Processes**

A workflow in Shipquick is a structured sequence of steps designed to accomplish a specific objective through disciplined execution. Workflows are fundamentally different from simple task execution because they enforce process discipline, maintain state across multiple interactions, guide users through proven sequences without allowing shortcuts, capture decisions and context at each step, and produce artifacts that accumulate toward larger goals.

Consider the difference between asking an AI to "help me write a business plan" versus executing a business plan development workflow. In the simple request case, the AI might provide some general advice or a template, leaving you to figure out the details and sequence. In a workflow-based approach, you would be guided through a specific sequence like first articulating your core value proposition with targeted questions that force clarity, then analyzing your target market with structured research steps, then designing your business model with explicit consideration of revenue streams and cost structures, then creating financial projections with appropriate assumptions and calculations, and finally synthesizing everything into a coherent document.

The workflow approach ensures nothing critical gets skipped, maintains context about decisions made in earlier steps when working on later steps, produces higher-quality outputs through structured thinking, and creates artifacts at each stage that can be refined and referenced later. Workflows transform vague objectives into concrete executable processes.

In Shipquick, workflows are decomposed into micro-steps where each step is a separate file containing specific instructions. This micro-step architecture prevents the common problem of AI agents trying to be helpful by anticipating future steps or skipping parts they think are obvious. By loading only one step at a time and requiring explicit user confirmation before proceeding, we maintain rigorous process discipline that produces consistent high-quality results.

### **Context Layers and Why They Matter**

Context is perhaps the most critical concept in Shipquick because it determines whether the system feels intelligent and personalized versus generic and forgetful. When we talk about context, we mean all the information that influences how the system should behave and what guidance it should provide. This includes stable information about the user as a person, information about their current goal and constraints, information about their progress and what they have already accomplished, information about the current session and what they are working on right now, knowledge about how concepts and artifacts relate to each other, and history of all past interactions that inform future behavior.

The reason context matters so profoundly is that appropriate guidance depends entirely on knowing the user's situation. Imagine you are working with a career coach. A good coach remembers your background and strengths, knows what you are trying to achieve and by when, tracks what preparation you have already completed, understands what you are working on in the current session, connects insights across different conversations, and learns what type of coaching resonates with you versus what does not work. Without this context, every session would require re-explaining everything, and the coach could never provide increasingly tailored and sophisticated guidance.

Shipquick implements context through multiple layers that serve different purposes and have different persistence characteristics. Some context is essentially permanent like your educational background, while other context is highly temporary like what file you are currently editing. By organizing context into distinct layers with clear purposes, we can manage complexity and ensure the right information is available at the right time without overwhelming the system with irrelevant details.

The critical insight about context that Shipquick embodies is that anything not explicitly documented and stored is forgotten by the AI model. Unlike humans who retain impressions and memories even from casual interactions, AI models are fundamentally stateless. Each conversation starts with only what is explicitly provided in the system prompt and conversation history. Therefore, Shipquick treats context management as a first-class concern with rigorous data persistence, explicit tracking of all information that should influence future behavior, and systematic updating of context as interactions unfold.

### **Meta-Systems That Generate Systems**

The concept of a meta-system is what makes Shipquick unique compared to individual agentic systems. A meta-system operates at a higher level of abstraction where instead of solving a specific problem, it generates systems that solve specific problems. Think of it as the difference between a carpenter who builds furniture versus a factory that produces tools for carpenters to use in building furniture.

Shipquick as a meta-system analyzes business goals to understand what capabilities are required, designs appropriate agent teams with the right mix of specialists, generates all the technical artifacts needed for the system to function, validates that the generated system is complete and coherent, and produces documentation so users understand how to work with their new system.

This meta-capability means that instead of hand-crafting a new agentic system for each use case from scratch, which would require weeks of specialized development effort, users can leverage Shipquick to generate complete working systems in a fraction of the time. The meta-system encodes expertise about agentic architecture, workflow design, context management, and agent collaboration so that this expertise gets automatically applied to every system it generates.

The vision is that building a sophisticated multi-agent system should be as straightforward as providing a clear description of your goal and answering questions about your preferences and constraints. Shipquick handles the complex architectural decisions, generates all necessary files and configurations, and produces a working system ready to guide you toward your objective. The meta-system is the factory that produces custom agentic systems on demand.

---

## **Architectural Philosophy**

The architecture of Shipquick is built on three foundational pillars that work together to create systems that are powerful, maintainable, and genuinely intelligent. Understanding these philosophical principles is essential because they inform every design decision and implementation detail throughout the system.

### **Pillar One: Modular Federation**

The first pillar is modular federation, which means Shipquick systems are composed of independent but coordinated modules rather than monolithic structures. Each module represents a coherent domain of functionality with its own agents, workflows, configurations, and data structures. Modules are designed to be self-contained so they can be understood, modified, and tested independently, yet they share common infrastructure and can reference each other when needed.

Think of modular federation like how a modern operating system works. You have a core kernel that provides essential services, and then you have various subsystems like the file system, networking stack, graphics system, and security system. Each subsystem has clear responsibilities and internal structure, but they all communicate through well-defined interfaces. You can upgrade the graphics system without touching the networking stack. You can add new subsystems without modifying the kernel, as long as they follow the interface contracts.

In Shipquick, the core module provides the universal orchestration layer and fundamental infrastructure that all other modules depend on. This includes the master orchestrator agent, the context management engine, the workflow execution engine, and the configuration system. Then specialized modules add domain-specific capabilities. A system designed to help with creative writing might have a Writing Module with agents for different genres, a Research Module for gathering and organizing information, an Editing Module for refinement and quality improvement, and a Publishing Module for preparing work for audiences.

The benefits of modular federation are significant. First, it provides clarity through separation of concerns where each module has a clear purpose and boundaries. Second, it enables maintainability because you can update or fix one module without touching others. Third, it supports extensibility where new capabilities can be added as new modules without rewriting existing code. Fourth, it allows customization where users can activate only the modules they need for their specific goal. Fifth, it enables collaboration where different developers or teams can work on different modules independently.

The key to making modular federation work is establishing clear contracts between modules. Each module declares what capabilities it provides, what configuration it requires, what context it consumes and produces, and how its agents can be invoked. The core orchestrator maintains a registry of all available modules and their capabilities, allowing it to route requests appropriately even as new modules are added.

### **Pillar Two: Hyper-Specialization**

The second pillar is hyper-specialization, which means each agent focuses narrowly on a single domain where they can develop genuine depth rather than trying to be adequate at many things. This principle runs counter to the intuition that generalist systems are more flexible and therefore better, but in practice, specialization produces dramatically better results for complex objectives.

Consider why you would go to a cardiologist for heart problems rather than a general practitioner, even though the general practitioner knows something about hearts. The cardiologist has spent years focused exclusively on cardiac medicine, understands subtle patterns and edge cases, stays current with the latest research in that specific field, and can provide nuanced guidance that a generalist simply cannot match. The same principle applies to AI agents.

In Shipquick systems, each agent has a specific role with a narrow mandate. For example, in a system designed to help someone learn data science, you might have a Statistics Theory Agent who helps with understanding mathematical foundations, a Python Programming Agent who focuses specifically on implementing algorithms in Python, a Data Visualization Agent specialized in creating effective charts and graphics, a Machine Learning Agent who guides model selection and evaluation, and a Project Design Agent who helps structure learning projects. Each agent can go deep in their domain, providing detailed explanations, catching subtle errors, and offering sophisticated guidance that would be impossible for a generalist to match.

The power of hyper-specialization comes from several factors. First, narrow focus enables depth where agents can embody expert-level knowledge in their specific domain. Second, it reduces hallucination because agents stay within their area of genuine expertise rather than trying to provide guidance on topics they understand superficially. Third, it creates clearer communication where agents can use domain-specific terminology and assume certain baseline knowledge. Fourth, it enables better persona design where each agent can have a distinct personality and communication style that fits their specialty. Fifth, it makes the system more maintainable because improving one agent's capabilities does not require touching others.

The challenge with hyper-specialization is ensuring seamless collaboration across agents so users do not experience friction when their task requires multiple types of expertise. This is where the orchestrator becomes critical, routing users to the right specialist for their current need and coordinating handoffs when work spans multiple domains. When implemented well, users experience the system as a cohesive team of experts rather than a collection of disconnected specialists.

### **Pillar Three: Context-Driven Intelligence**

The third pillar is context-driven intelligence, which means the system accumulates knowledge over time and uses that knowledge to provide increasingly personalized and sophisticated guidance. This is perhaps the most important pillar because it is what transforms a collection of specialist agents into a genuinely intelligent system that learns and adapts.

Context-driven intelligence begins with the recognition that appropriate behavior depends entirely on situation. The guidance that would be perfect for a beginner would bore or frustrate an expert. The suggestions that work well for someone with ample time would be impractical for someone facing tight deadlines. The communication style that resonates with one person might alienate another. A truly intelligent system must understand these contextual factors and adjust its behavior accordingly.

In Shipquick, context-driven intelligence is implemented through six distinct context layers that capture different types of information with different persistence characteristics. The User Profile Layer maintains stable information about the person such as their background, skills, preferences, and learning style. The Goal and Context Layer captures information specific to their current objective including what they are trying to achieve, their constraints, their motivation, and their strategy. The Progress and State Layer tracks dynamic information about where they are in their journey including completed deliverables, acquired skills, and identified gaps.

The Session Context Layer maintains information about the current interaction such as what they are working on right now, which agents are active, and what decisions have been made in this session. The Knowledge Graph Layer represents relationships between concepts, artifacts, and experiences, enabling the system to make intelligent connections across different parts of the user's journey. The Interaction History Layer maintains a searchable record of all past interactions, creating a personal knowledge base that informs future behavior.

Every agent in a Shipquick system has access to these context layers and uses them to inform their behavior. When an agent is activated, it automatically loads relevant context so it can pick up where previous interactions left off. When an agent makes observations or learns something about the user, it updates the appropriate context layers so that knowledge persists for future sessions. When an agent needs to make decisions about what guidance to provide, it queries context to understand the user's current situation and tailor its recommendations accordingly.

The result is a system that feels genuinely intelligent because it remembers past interactions, learns what works for the specific user, adapts its communication style and depth of explanation to demonstrated competence, makes connections between different parts of the user's work, and provides increasingly personalized guidance as it accumulates knowledge over time. This accumulation of context and continuous adaptation is what differentiates Shipquick systems from simple conversational AI that treats each interaction as largely independent.

---

## **Critical Context Management System**

The context management system is the nervous system of Shipquick, enabling all agents to maintain awareness of the user's situation and providing the foundation for intelligent, personalized behavior. This section explains each context layer in detail, specifying exactly what data is captured, how it is structured, how it is updated, and how agents access and use it.

### **The Absolute Requirement: Everything Must Be Tracked**

Before detailing the specific context layers, it is essential to establish the foundational principle that governs all context management in Shipquick. This principle is absolute and non-negotiable: **Anything not explicitly documented and stored with proper metadata is forgotten and lost forever.**

AI models are fundamentally stateless. Unlike human memory which retains impressions and associations even from casual interactions, AI models start each conversation with only what is explicitly provided in the system prompt and conversation history. If information is not captured in a structured, persistent format, it does not exist for the system. This means that every piece of information that should influence future behavior must be deliberately tracked with appropriate metadata.

This is not optional or a nice-to-have feature. It is the core requirement that makes Shipquick systems capable of providing continuous, intelligent assistance over weeks or months. Every interaction must produce context updates. Every observation about the user must be recorded. Every decision made must be documented. Every artifact produced must be tracked with metadata. Without this rigorous discipline around context capture, the system cannot function as designed.

### **Context Layer One: User Profile Layer**

The User Profile Layer maintains stable information about the user as a person. This context persists indefinitely and changes infrequently, establishing the foundational understanding of who the user is beyond their current goal.

#### **User Profile Schema**

Every user in a Shipquick system has exactly one user profile document with the following structure:

**User Profile Document Structure:**

yaml  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T14:23:45.123Z"  
last\_modified\_timestamp: "2026-01-10T14:23:45.123Z"  
version: 1  
schema\_version: "1.0.0"

identity:  
  preferred\_name: "string"  
  full\_name: "string"  
  email: "string"  
  timezone: "string"  
  location: "string"  
    
background:  
  education:  
    \- degree\_id: "EDU\_\[TIMESTAMP\]\_\[UUID\]"  
      institution: "string"  
      degree: "string"  
      field: "string"  
      graduation\_year: integer  
      created\_timestamp: "timestamp"  
    
  work\_history:  
    \- position\_id: "POS\_\[TIMESTAMP\]\_\[UUID\]"  
      company: "string"  
      title: "string"  
      start\_date: "date"  
      end\_date: "date"  
      description: "string"  
      created\_timestamp: "timestamp"  
    
  domain\_expertise:  
    \- expertise\_id: "EXP\_\[TIMESTAMP\]\_\[UUID\]"  
      domain: "string"  
      proficiency\_level: integer *\# 1-10 scale*  
      years\_experience: integer  
      description: "string"  
      created\_timestamp: "timestamp"  
      last\_assessed\_timestamp: "timestamp"

learning\_preferences:  
  preferred\_learning\_style:  
    \- "visual" | "textual" | "hands-on" | "theoretical"  
  preferred\_explanation\_depth:  
    \- "high-level" | "detailed" | "comprehensive"  
  preferred\_pacing:  
    \- "fast" | "moderate" | "thorough"  
  challenge\_preference:  
    \- "stretch" | "balanced" | "supported"  
  autonomy\_preference:  
    \- "high" | "moderate" | "guided"  
  feedback\_preference:  
    \- "direct" | "constructive" | "encouraging"

personality\_traits:  
  \- trait\_id: "TRT\_\[TIMESTAMP\]\_\[UUID\]"  
    trait\_name: "string"  
    trait\_value: integer *\# 1-10 scale*  
    description: "string"  
    created\_timestamp: "timestamp"

skill\_levels:  
  \- skill\_id: "SKL\_\[TIMESTAMP\]\_\[UUID\]"  
    skill\_name: "string"  
    current\_level: integer *\# 1-10 scale*  
    target\_level: integer *\# 1-10 scale*  
    last\_assessed\_timestamp: "timestamp"  
    assessment\_notes: "string"  
    skill\_history:  
      \- assessment\_id: "ASS\_\[TIMESTAMP\]\_\[UUID\]"  
        timestamp: "timestamp"  
        level: integer  
        notes: "string"

preferences:  
  communication\_preferences:  
    formality\_level: "formal" | "professional" | "casual"  
    verbosity: "concise" | "moderate" | "detailed"  
    use\_technical\_jargon: boolean  
    use\_analogies: boolean  
    
  work\_preferences:  
    preferred\_work\_times:  
      \- day\_of\_week: "string"  
        start\_time: "time"  
        end\_time: "time"  
    session\_duration\_preference: integer *\# minutes*

    break\_frequency\_preference: integer *\# minutes*

**Field Explanations:**

The `user_profile_id` uniquely identifies this user profile using the pattern USR followed by a timestamp and a UUID. This ensures every profile has a globally unique identifier that can be referenced from other documents. The `created_timestamp` records exactly when this profile was first created using ISO 8601 format with millisecond precision and UTC timezone. The `last_modified_timestamp` tracks when any field in the profile was last updated, enabling the system to identify stale information. The `version` is an integer that increments with each update, supporting versioning and allowing rollback if needed. The `schema_version` indicates which version of the profile structure this document follows, enabling schema evolution over time.

The `identity` section captures basic information about who the user is including their preferred name for personalized communication, their full legal name if needed for formal documents, their email address for any external communications, their timezone for scheduling and time-sensitive features, and their physical location which may be relevant for certain types of guidance.

The `background` section maintains stable information about the user's history. The `education` array contains degree records, where each degree has its own unique identifier, institution name, degree type, field of study, graduation year, and creation timestamp. The `work_history` array similarly tracks positions with unique identifiers, company names, job titles, date ranges, descriptions of responsibilities, and creation timestamps. The `domain_expertise` array records areas where the user has knowledge or experience, with each domain having a unique identifier, a proficiency level on a one-to-ten scale, years of experience, a description of their expertise, a creation timestamp, and a last assessed timestamp.

The `learning_preferences` section is critical for adapting agent behavior to match how the user learns best. The `preferred_learning_style` array can contain multiple values like visual for users who benefit from diagrams and illustrations, textual for users who prefer reading detailed explanations, hands-on for users who learn by doing, or theoretical for users who want to understand principles deeply. The `preferred_explanation_depth` indicates whether the user prefers high-level overviews, detailed explanations with examples, or comprehensive treatment with edge cases. The `preferred_pacing` shows whether the user wants to move quickly through material, prefers a moderate pace with time to absorb, or wants thorough coverage even if it takes longer.

The `challenge_preference` reveals whether the user wants to be stretched with difficult material slightly above their current level, prefers a balanced approach, or wants more supported guidance that ensures success. The `autonomy_preference` indicates whether the user wants high autonomy to explore and make decisions independently, moderate autonomy with some guidance, or prefers to be guided step-by-step through processes. The `feedback_preference` shows whether the user responds best to direct critical feedback, constructive feedback that balances positives and improvements, or encouraging feedback that emphasizes progress.

The `personality_traits` section captures relevant personality characteristics that affect how agents should interact with the user. Each trait has a unique identifier, a name like "detail-oriented" or "creative" or "analytical", a value on a one-to-ten scale indicating strength of that trait, a description explaining how it manifests, and a creation timestamp.

The `skill_levels` section is dynamic and frequently updated as the user progresses. Each skill has a unique identifier, a name clearly identifying the skill, the current level on a one-to-ten scale, a target level if the user is working to improve, a last assessed timestamp, notes from the most recent assessment, and a history array that tracks how the skill level has changed over time. This history is crucial for showing progress and identifying plateaus where additional support might be needed.

The `preferences` section captures how the user prefers to work with the system. The `communication_preferences` specify formality level ranging from formal to casual, verbosity indicating whether they want concise responses or detailed explanations, whether they are comfortable with technical jargon or prefer plain language, and whether they appreciate analogies for explaining concepts. The `work_preferences` include preferred work times as an array of day and time ranges, preferred session duration in minutes, and preferred frequency of breaks during longer work sessions.

**Usage Patterns:**

Agents access the User Profile Layer at activation to understand who they are working with. This happens automatically as part of the agent initialization sequence. When an agent needs to make decisions about communication style, explanation depth, or pacing, it queries the relevant sections of the user profile. When an agent observes something new about the user like a skill improvement or a preference revelation, it updates the profile with a new version number and timestamp.

The profile should be treated as a living document that improves over time. Early in the relationship, many fields may be unspecified or based on defaults. As the system observes the user's behavior and learns their preferences, the profile becomes increasingly accurate and detailed. This evolution is what enables the system to provide better guidance over time.

### **Context Layer Two: Goal and Context Layer**

The Goal and Context Layer captures information specific to the user's current primary objective. While users may work on multiple things, there is typically one overarching goal that drives their engagement with the system. This layer provides the teleological context that everything else serves.

#### **Goal and Context Schema**

yaml  
goal\_id: "GOAL\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T15:30:22.456Z"  
last\_modified\_timestamp: "2026-01-10T15:30:22.456Z"  
version: 1  
schema\_version: "1.0.0"  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]" *\# Reference to user*

goal\_definition:  
  primary\_objective: "string" *\# Clear statement of what user wants to achieve*  
  success\_criteria:  
    \- criterion\_id: "CRT\_\[TIMESTAMP\]\_\[UUID\]"  
      description: "string"  
      measurable: boolean  
      target\_value: "string"  
      current\_value: "string"  
      created\_timestamp: "timestamp"  
    
  motivation:  
    \- motivation\_id: "MOT\_\[TIMESTAMP\]\_\[UUID\]"  
      type: "intrinsic" | "extrinsic"  
      description: "string"  
      importance\_level: integer *\# 1-10 scale*  
      created\_timestamp: "timestamp"

constraints:  
  timeline:  
    start\_date: "date"  
    target\_completion\_date: "date"  
    hard\_deadline: boolean  
    flexibility\_description: "string"  
    
  time\_availability:  
    hours\_per\_week: integer  
    specific\_available\_blocks:  
      \- block\_id: "BLK\_\[TIMESTAMP\]\_\[UUID\]"  
        day\_of\_week: "string"  
        start\_time: "time"  
        end\_time: "time"  
        notes: "string"  
    
  financial\_constraints:  
    budget\_amount: decimal  
    budget\_currency: "string"  
    budget\_flexibility: "strict" | "moderate" | "flexible"  
    
  other\_constraints:  
    \- constraint\_id: "CST\_\[TIMESTAMP\]\_\[UUID\]"  
      description: "string"  
      severity: "blocking" | "significant" | "minor"  
      created\_timestamp: "timestamp"

strategy:  
  chosen\_approach: "string"  
  approach\_rationale: "string"  
  key\_milestones:  
    \- milestone\_id: "MLS\_\[TIMESTAMP\]\_\[UUID\]"  
      name: "string"  
      description: "string"  
      target\_date: "date"  
      completion\_status: "not\_started" | "in\_progress" | "completed"  
      completion\_timestamp: "timestamp"  
      created\_timestamp: "timestamp"  
    
  priorities:  
    \- priority\_id: "PRI\_\[TIMESTAMP\]\_\[UUID\]"  
      area: "string"  
      importance\_level: integer *\# 1-10 scale*  
      rationale: "string"  
      created\_timestamp: "timestamp"  
    
  decided\_not\_to\_pursue:  
    \- decision\_id: "DEC\_\[TIMESTAMP\]\_\[UUID\]"  
      what: "string"  
      rationale: "string"  
      decided\_timestamp: "timestamp"

target\_specifics:  
  *\# This section is domain-specific and flexible*  
  *\# Contains detailed context about the specific target*  
  *\# For example, if goal is career transition:*  
  *\#   \- target\_companies: \[...\]*  
  *\#   \- target\_roles: \[...\]*  
  *\#   \- target\_locations: \[...\]*

  *\# Structure adapts to goal type*

**Field Explanations:**

The `goal_id` uniquely identifies this goal using the GOAL prefix pattern. Each goal gets its own document because users might work on different goals at different times, and historical goals provide valuable context. The `user_profile_id` explicitly links this goal to the user profile, establishing the relationship in both directions.

The `goal_definition` section articulates what the user is trying to achieve. The `primary_objective` is a clear, specific statement like "Transition into a data science role at a major tech company within six months" or "Build a portfolio of ten professional-quality illustrations to launch freelance career" or "Master conversational Spanish for business contexts by year end". Clarity here is crucial because every other decision flows from understanding the objective.

The `success_criteria` array defines what success looks like in measurable terms. Each criterion has a unique identifier, a description of what is being measured, a flag indicating whether it is truly measurable with numbers, a target value if measurable, the current value for tracking progress, and a creation timestamp. Having explicit success criteria prevents goal drift and enables objective assessment of whether the goal is being achieved.

The `motivation` array captures why the user cares about this goal. Each motivation has a unique identifier, a type indicating whether it is intrinsic meaning driven by internal satisfaction or extrinsic meaning driven by external rewards or pressures, a description explaining the motivation, an importance level on a one-to-ten scale, and a creation timestamp. Understanding motivation helps agents provide relevant encouragement and frame guidance in ways that resonate with the user's drivers.

The `constraints` section documents limitations that shape what is possible. The `timeline` subsection includes the start date when work began, the target completion date the user is aiming for, whether that is a hard deadline that cannot be missed or a soft target with flexibility, and a description of any flexibility in the timeline. The `time_availability` subsection records how many hours per week the user can dedicate and specific blocks of time they have available, with each block having a unique identifier, day of week, start and end times, and notes about any conditions.

The `financial_constraints` subsection captures budget limitations including the amount available, the currency, and how flexible the budget is. The `other_constraints` array holds any additional limitations like "Cannot work in noisy environments" or "Must maintain full-time job during transition" or "Limited to free or open-source tools", with each constraint having an identifier, description, severity classification, and creation timestamp.

The `strategy` section documents the user's chosen approach to achieving their goal. The `chosen_approach` describes the overall strategy like "Build portfolio while taking online courses, then apply to internships for practical experience" or "Network intensively while developing technical skills in parallel" or "Work with mentor on progressively challenging projects". The `approach_rationale` explains why this strategy was chosen over alternatives.

The `key_milestones` array breaks the journey into major checkpoints. Each milestone has an identifier, name, description, target date, completion status, timestamp of when it was completed if applicable, and creation timestamp. The `priorities` array explicitly ranks different aspects of the goal, showing where the user has chosen to focus energy versus what they are deprioritizing. Each priority has an identifier, area description, importance level, rationale for that prioritization, and creation timestamp.

Critically, the `decided_not_to_pursue` array captures what the user has explicitly chosen not to do. This is important because it prevents agents from repeatedly suggesting approaches the user has already rejected. Each decision has an identifier, description of what was decided against, the rationale for that decision, and the timestamp when the decision was made.

The `target_specifics` section is intentionally flexible because different types of goals require different contextual information. The schema adapts to the goal type while maintaining structured data. For a career transition goal, this might include arrays of target companies, target roles, target locations, required certifications, and industry-specific context. For a creative portfolio goal, it might include target audience descriptions, style preferences, platform specifications, and exhibition opportunities. The structure should be determined during goal analysis and documented clearly.

**Usage Patterns:**

The Goal and Context Layer is referenced constantly throughout the user's journey. Every time an agent needs to make a decision about what to suggest, how to prioritize, or what approach to take, it should query this layer to ensure alignment with the overarching objective. When milestones are completed or constraints change, this layer must be updated immediately with new version numbers and timestamps.

### **Context Layer Three: Progress and State Layer**

The Progress and State Layer tracks dynamic information about where the user is in their journey toward their goal. This layer changes frequently as work progresses and is essential for maintaining awareness of what has been accomplished, what is in flight, and what remains to be done.

#### **Progress and State Schema**

yaml  
progress\_id: "PRG\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T16:45:33.789Z"  
last\_modified\_timestamp: "2026-01-10T16:45:33.789Z"  
version: 1  
schema\_version: "1.0.0"  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]"  
goal\_id: "GOAL\_\[TIMESTAMP\]\_\[UUID\]"

completed\_deliverables:  
  \- deliverable\_id: "DEL\_\[TIMESTAMP\]\_\[UUID\]"  
    name: "string"  
    description: "string"  
    deliverable\_type: "string" *\# domain-specific types*  
    completion\_timestamp: "timestamp"  
    quality\_score: decimal *\# 0.0-10.0*  
    quality\_assessment\_id: "QAS\_\[TIMESTAMP\]\_\[UUID\]" *\# Reference to assessment*  
    artifact\_location: "path/to/artifact"  
    metadata:  
      created\_by\_agent\_id: "string"  
      created\_in\_workflow\_id: "string"  
      iteration\_count: integer  
      tags: \["array", "of", "tags"\]  
    feedback\_received:  
      \- feedback\_id: "FBK\_\[TIMESTAMP\]\_\[UUID\]"  
        feedback\_source: "agent" | "external" | "self"  
        feedback\_text: "string"  
        feedback\_timestamp: "timestamp"

in\_progress\_work:  
  \- work\_item\_id: "WRK\_\[TIMESTAMP\]\_\[UUID\]"  
    name: "string"  
    description: "string"  
    work\_type: "string"  
    started\_timestamp: "timestamp"  
    last\_active\_timestamp: "timestamp"  
    current\_status: "string"  
    completion\_percentage: integer *\# 0-100*  
    assigned\_agent\_id: "string"  
    active\_workflow\_id: "string"  
    current\_step\_id: "string"  
    next\_actions:  
      \- action\_id: "ACT\_\[TIMESTAMP\]\_\[UUID\]"  
        action\_description: "string"  
        action\_priority: integer *\# 1-10*  
        estimated\_duration\_minutes: integer

skill\_progression:  
  \- skill\_id: "SKL\_\[TIMESTAMP\]\_\[UUID\]" *\# References skill from user profile*  
    proficiency\_timeline:  
      \- assessment\_id: "ASS\_\[TIMESTAMP\]\_\[UUID\]"  
        timestamp: "timestamp"  
        proficiency\_level: integer *\# 1-10*  
        assessment\_method: "string"  
        assessor\_agent\_id: "string"  
        notes: "string"  
    recent\_practice:  
      \- practice\_id: "PRC\_\[TIMESTAMP\]\_\[UUID\]"  
        timestamp: "timestamp"  
        practice\_type: "string"  
        duration\_minutes: integer  
        effectiveness\_rating: integer *\# 1-10*  
        notes: "string"

behavioral\_patterns:  
  productivity\_patterns:  
    most\_productive\_times:  
      \- day\_of\_week: "string"  
        time\_range: "string"  
        productivity\_score: decimal  
        sample\_size: integer  
    average\_session\_duration\_minutes: decimal  
    sessions\_per\_week: decimal  
    completion\_rate: decimal *\# percentage of started tasks completed*  
    
  engagement\_patterns:  
    streak\_days: integer  
    longest\_streak\_days: integer  
    last\_active\_date: "date"  
    engagement\_trend: "increasing" | "stable" | "decreasing"  
    
  struggle\_areas:  
    \- struggle\_id: "STG\_\[TIMESTAMP\]\_\[UUID\]"  
      area: "string"  
      description: "string"  
      first\_observed\_timestamp: "timestamp"  
      frequency: integer *\# times observed*  
      severity: "minor" | "moderate" | "significant"  
      interventions\_tried:  
        \- intervention\_id: "INT\_\[TIMESTAMP\]\_\[UUID\]"  
          intervention\_description: "string"  
          tried\_timestamp: "timestamp"  
          effectiveness: "helpful" | "neutral" | "not\_helpful"

milestone\_progress:  
  \- milestone\_id: "MLS\_\[TIMESTAMP\]\_\[UUID\]" *\# References milestone from goal*  
    progress\_updates:  
      \- update\_id: "UPD\_\[TIMESTAMP\]\_\[UUID\]"  
        timestamp: "timestamp"  
        progress\_percentage: integer *\# 0-100*  
        progress\_description: "string"  
        blockers\_identified:  
          \- blocker\_id: "BLK\_\[TIMESTAMP\]\_\[UUID\]"  
            blocker\_description: "string"  
            severity: "minor" | "moderate" | "critical"  
            identified\_timestamp: "timestamp"  
            resolution\_status: "unresolved" | "in\_progress" | "resolved"  
            resolution\_description: "string"

            resolved\_timestamp: "timestamp"

**Field Explanations:**

The Progress and State Layer is explicitly linked to both the user profile and the specific goal through reference IDs. This ensures progress is always understood in context of who is progressing and toward what objective.

The `completed_deliverables` array maintains a comprehensive record of everything the user has produced. Each deliverable has a unique identifier, a name and description, a type that is domain-specific like "case\_study" or "code\_module" or "design\_mockup", a completion timestamp marking exactly when it was finished, a quality score on a zero-to-ten scale based on assessment against standards, a reference to the detailed quality assessment document, and the file path or URL where the artifact is stored.

The `metadata` subsection captures important context about how the deliverable was created including which agent guided its creation, which workflow was used, how many iterations it took to reach the final version, and tags for categorization and search. The `feedback_received` array documents all feedback on the deliverable from any source, with each feedback item having an identifier, source classification, the actual feedback text, and timestamp.

The `in_progress_work` array tracks everything currently being worked on. Each work item has a unique identifier, name and description, work type classification, timestamps for when it started and when it was last active, current status description, completion percentage, the agent assigned to help, the active workflow being executed, the current step in that workflow, and a `next_actions` array listing what needs to happen next with priorities and estimated durations. This structure enables the system to provide intelligent answers to "Where was I?" and "What should I do next?" questions.

The `skill_progression` section tracks how the user's skills are developing over time. For each skill being tracked, there is a `proficiency_timeline` array that records every assessment with timestamp, proficiency level, assessment method, which agent did the assessment, and notes. This creates a complete picture of skill development over time, making progress visible and identifying plateaus that might need different approaches.

The `recent_practice` array for each skill records practice activities with timestamps, practice types, duration, self-rated effectiveness, and notes. This data helps agents understand practice patterns and suggest adjustments. For example, if the user is practicing a skill frequently but effectiveness ratings are consistently low, the agent might suggest a different practice approach.

The `behavioral_patterns` section identifies patterns in how the user works. The `productivity_patterns` subsection documents most productive times based on observed data including day of week, time range, productivity score, and sample size for statistical validity. It also tracks average session duration, sessions per week, and completion rate showing what percentage of started tasks actually get finished. These patterns inform when agents should suggest work sessions and how to structure tasks.

The `engagement_patterns` subsection monitors overall engagement with the system including current streak of active days, longest streak ever achieved, last active date, and whether engagement is trending up or down. The `struggle_areas` array identifies aspects where the user is having difficulty. Each struggle area has an identifier, description, timestamp when first observed, frequency of occurrence, severity classification, and an array of interventions that have been tried with their effectiveness ratings. This enables the system to recognize when additional support is needed and avoid repeating ineffective interventions.

The `milestone_progress` section tracks progress toward each milestone defined in the Goal Layer. For each milestone, there is a `progress_updates` array with periodic snapshots of progress including percentage complete, descriptive update, and any blockers identified. Each blocker has its own identifier, description, severity, identification timestamp, resolution status, and resolution details with timestamp. This structure makes blockers visible and ensures they get addressed rather than becoming permanent obstacles.

**Usage Patterns:**

The Progress and State Layer is updated after every significant work session. When a deliverable is completed, a new entry must be added with full metadata. When work begins on something new, an in\_progress\_work entry must be created. When skills are assessed or practiced, those arrays must be updated. When patterns are observed, they should be documented in behavioral\_patterns. When milestones progress or encounter blockers, progress\_updates must be added.

Agents query this layer to understand the current situation, identify what needs attention, recognize patterns that inform suggestions, and provide encouraging feedback about progress. The layer should feel like a detailed project management system that maintains perfect awareness of the user's journey.

### **Context Layer Four: Session Context Layer**

The Session Context Layer maintains information about the current interaction. This is the most volatile context layer, resetting with each new session but essential for maintaining coherence within a single work period.

#### **Session Context Schema**

yaml  
session\_id: "SES\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T17:22:14.567Z"  
last\_modified\_timestamp: "2026-01-10T17:22:14.567Z"  
schema\_version: "1.0.0"  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]"  
goal\_id: "GOAL\_\[TIMESTAMP\]\_\[UUID\]"

session\_metadata:  
  session\_start\_timestamp: "timestamp"  
  session\_type: "planned" | "spontaneous" | "continuation"  
  intended\_duration\_minutes: integer  
  actual\_duration\_minutes: integer *\# updated at session end*  
  session\_location: "string" *\# physical or virtual context*  
  user\_energy\_level: integer *\# 1-10, self-reported or inferred*  
  user\_focus\_level: integer *\# 1-10, self-reported or inferred*

active\_agents:  
  \- agent\_instance\_id: "AGT\_\[TIMESTAMP\]\_\[UUID\]"  
    agent\_type: "string" *\# e.g. "orchestrator", "specialist\_writer"*  
    activation\_timestamp: "timestamp"  
    deactivation\_timestamp: "timestamp"  
    activation\_reason: "string"  
    context\_loaded:  
      \- context\_type: "string"  
        context\_id: "string"  
        loaded\_timestamp: "timestamp"

active\_workflows:  
  \- workflow\_instance\_id: "WFL\_\[TIMESTAMP\]\_\[UUID\]"  
    workflow\_type: "string"  
    started\_timestamp: "timestamp"  
    current\_step\_id: "string"  
    completed\_steps: \["array", "of", "step\_ids"\]  
    pending\_steps: \["array", "of", "step\_ids"\]  
    workflow\_state:  
      *\# Domain-specific state data*  
      *\# Captured from step frontmatter*  
      key: "value"  
    decision\_log:  
      \- decision\_id: "DCS\_\[TIMESTAMP\]\_\[UUID\]"  
        decision\_point: "string"  
        decision\_made: "string"  
        rationale: "string"  
        decided\_by: "user" | "agent" | "collaborative"  
        decision\_timestamp: "timestamp"

working\_artifacts:  
  \- artifact\_id: "ART\_\[TIMESTAMP\]\_\[UUID\]"  
    artifact\_name: "string"  
    artifact\_type: "string"  
    artifact\_location: "path/to/file"  
    status: "draft" | "in\_review" | "finalized"  
    created\_in\_session\_timestamp: "timestamp"  
    last\_modified\_timestamp: "timestamp"  
    change\_log:  
      \- change\_id: "CHG\_\[TIMESTAMP\]\_\[UUID\]"  
        change\_description: "string"  
        change\_timestamp: "timestamp"  
        changed\_by\_agent\_id: "string"

session\_observations:  
  \- observation\_id: "OBS\_\[TIMESTAMP\]\_\[UUID\]"  
    observation\_type: "skill\_demonstration" | "preference\_revealed" | "pattern\_observed" | "struggle\_noticed"  
    observation\_description: "string"  
    observation\_timestamp: "timestamp"  
    observed\_by\_agent\_id: "string"  
    context\_propagation:  
      should\_update\_user\_profile: boolean  
      should\_update\_progress: boolean  
      should\_update\_goal: boolean  
      propagation\_notes: "string"

immediate\_next\_actions:  
  \- action\_id: "ACT\_\[TIMESTAMP\]\_\[UUID\]"  
    action\_description: "string"  
    action\_type: "continue\_workflow" | "start\_new\_task" | "review\_artifact" | "take\_break"  
    priority: integer *\# 1-10*  
    estimated\_duration\_minutes: integer  
    prerequisites\_completed: boolean  
    assigned\_agent\_id: "string"

session\_summary:  
  accomplishments: \["array", "of", "strings"\]  
  challenges\_encountered: \["array", "of", "strings"\]  
  insights\_gained: \["array", "of", "strings"\]  
  next\_session\_recommendations: \["array", "of", "strings"\]  
  energy\_trend: "increased" | "maintained" | "decreased"

  session\_quality\_rating: integer *\# 1-10*

**Field Explanations:**

The Session Context Layer is created at the beginning of each work session and maintained throughout. The `session_id` uniquely identifies this particular session. Links to user\_profile\_id and goal\_id establish context.

The `session_metadata` section captures basic information about the session including exact start time, session type indicating whether it was planned in advance or spontaneous, intended duration, actual duration updated when session ends, location providing physical or virtual context that might be relevant, and user energy and focus levels which can be self-reported or inferred from behavior patterns.

The `active_agents` array tracks which agents have been activated during this session. Each agent instance has an identifier, type, timestamps for activation and deactivation, reason for activation, and details about what context was loaded for that agent. This enables sophisticated analysis of how the user interacts with different agents and which agents are most frequently used.

The `active_workflows` array maintains state for any workflows currently being executed. Each workflow instance has an identifier, type, start timestamp, current step identifier, arrays of completed and pending steps, workflow-specific state data captured from step frontmatter, and a decision log recording every decision made during workflow execution. This decision log is particularly important because it captures the reasoning behind choices, enabling better resumption if the workflow is paused and providing learning data for improving future workflows.

The `working_artifacts` array tracks documents or files being created or modified during the session. Each artifact has an identifier, name, type, location, status, creation and modification timestamps, and a change log documenting every modification made with descriptions, timestamps, and which agent made the change. This provides complete audit trail and enables sophisticated version control.

The `session_observations` array is where agents record anything they notice about the user during the session. Each observation has an identifier, type classification, description, timestamp, identifier of the agent that made the observation, and crucially a `context_propagation` subsection. This subsection specifies whether the observation should be propagated to update the user profile, progress layer, or goal layer, along with notes explaining why. This is how information flows from temporary session context into persistent context layers.

The `immediate_next_actions` array lists what should happen next, either continuing the current session or starting the next one. Each action has an identifier, description, type, priority, estimated duration, flag indicating whether prerequisites are complete, and which agent should handle it. This prevents losing momentum between sessions.

The `session_summary` section is completed at session end and provides a high-level recap including accomplishments achieved, challenges encountered, insights gained, recommendations for the next session, trend in energy level, and an overall quality rating. This summary gets referenced in future sessions to maintain continuity.

**Usage Patterns:**

Session Context is created automatically when the user begins interacting with the system. Throughout the session, agents continuously update this context to reflect the current state. When workflows execute steps, the workflow state gets updated. When observations are made, they are recorded immediately. When decisions are made, they are logged.

At session end, the system performs a critical operation of extracting insights from session context and propagating them to persistent context layers. Observations marked for propagation get converted into updates to user profile, progress, or goal layers. Session summary gets stored in interaction history. Artifacts get moved from working status to completed deliverables if finalized.

### **Context Layer Five: Knowledge Graph Layer**

The Knowledge Graph Layer represents relationships between concepts, artifacts, experiences, and knowledge elements. While the other context layers maintain structured records, the knowledge graph captures the web of connections that enable intelligent association and reasoning.

#### **Knowledge Graph Schema**

yaml  
knowledge\_graph\_id: "KG\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T18:15:44.234Z"  
last\_modified\_timestamp: "2026-01-10T18:15:44.234Z"  
version: 1  
schema\_version: "1.0.0"  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]"  
goal\_id: "GOAL\_\[TIMESTAMP\]\_\[UUID\]"

nodes:  
  \- node\_id: "NODE\_\[TIMESTAMP\]\_\[UUID\]"  
    node\_type: "concept" | "artifact" | "skill" | "experience" | "person" | "resource"  
    node\_name: "string"  
    node\_description: "string"  
    created\_timestamp: "timestamp"  
    last\_referenced\_timestamp: "timestamp"  
    reference\_count: integer  
    metadata:  
      *\# Type-specific metadata*  
      *\# For artifacts: deliverable\_id reference*  
      *\# For skills: skill\_id reference*  
      *\# For concepts: domain, complexity\_level*  
      key: "value"

edges:  
  \- edge\_id: "EDGE\_\[TIMESTAMP\]\_\[UUID\]"  
    source\_node\_id: "NODE\_\[TIMESTAMP\]\_\[UUID\]"  
    target\_node\_id: "NODE\_\[TIMESTAMP\]\_\[UUID\]"  
    edge\_type: "string" *\# e.g. "uses", "builds\_on", "relates\_to", "exemplifies", "requires"*  
    edge\_strength: decimal *\# 0.0-1.0, confidence in relationship*  
    edge\_description: "string"  
    created\_timestamp: "timestamp"  
    last\_referenced\_timestamp: "timestamp"  
    reference\_count: integer  
    bidirectional: boolean  
    metadata:  
      *\# Relationship-specific metadata*  
      created\_by\_agent\_id: "string"  
      created\_in\_context: "string"  
      evidence: \["array", "of", "supporting", "evidence"\]

concept\_clusters:  
  \- cluster\_id: "CLU\_\[TIMESTAMP\]\_\[UUID\]"  
    cluster\_name: "string"  
    cluster\_description: "string"  
    member\_node\_ids: \["array", "of", "node\_ids"\]  
    cluster\_centroid\_node\_id: "NODE\_\[TIMESTAMP\]\_\[UUID\]" *\# most representative node*  
    cluster\_cohesion\_score: decimal *\# 0.0-1.0*  
    created\_timestamp: "timestamp"  
    last\_modified\_timestamp: "timestamp"

learning\_paths:  
  \- path\_id: "PATH\_\[TIMESTAMP\]\_\[UUID\]"  
    path\_name: "string"  
    path\_description: "string"  
    path\_nodes\_sequence: \["ordered", "array", "of", "node\_ids"\]  
    path\_type: "prerequisites" | "progression" | "exploration" | "mastery"  
    difficulty\_curve: \["array", "of", "difficulty", "levels"\]  
    estimated\_duration\_hours: decimal  
    completion\_status: "not\_started" | "in\_progress" | "completed"

    created\_timestamp: "timestamp"

**Field Explanations:**

The Knowledge Graph uses a nodes-and-edges structure to represent entities and their relationships. Each `node` represents something the user has learned, created, or engaged with. Nodes have unique identifiers, type classifications, names, descriptions, creation and last reference timestamps, and reference counts showing how often they have been accessed or referenced. The `metadata` subsection contains type-specific information, allowing different node types to store relevant details.

Each `edge` represents a relationship between two nodes. Edges have unique identifiers, source and target node IDs, edge type describing the nature of the relationship, edge strength indicating confidence in the relationship on a zero-to-one scale, description, timestamps, reference count, flag for whether the relationship is bidirectional, and metadata including which agent created the edge, in what context, and what evidence supports the relationship.

The `concept_clusters` array identifies groups of related nodes. Each cluster has an identifier, name, description, array of member node IDs, identifier of the most representative node in the cluster, cohesion score indicating how tightly related cluster members are, and timestamps. Clusters emerge from analyzing edge patterns and enable high-level reasoning about domains.

The `learning_paths` array represents sequences through the knowledge graph that constitute meaningful learning journeys. Each path has an identifier, name, description, ordered sequence of nodes, path type, difficulty curve showing how difficulty changes along the path, estimated duration, completion status, and creation timestamp. Learning paths help agents guide the user through progressive skill development.

**Usage Patterns:**

The Knowledge Graph grows organically as the user engages with the system. When the user learns a new concept, a node gets created. When they create an artifact that applies concepts, edges get created linking the artifact node to concept nodes. When they struggle with something, edges capture that relationship. When they discover that two seemingly unrelated concepts actually connect, an edge documents that insight.

Agents query the Knowledge Graph to make intelligent suggestions. For example, if the user is working on a new artifact and struggling, the agent can query the graph to find similar artifacts the user created successfully, identify which concepts those artifacts used, and suggest applying the same concepts or techniques. The graph enables reasoning like "Since you struggled with concept X when you learned it through approach Y, but succeeded with concept Z using approach W, and X and Z are similar, perhaps approach W would work better for X as well."

The Knowledge Graph also enables discovery. Agents can identify gaps where the user has learned concept A and concept C but not concept B that connects them. They can identify clusters of knowledge that would benefit from synthesis into a higher-level understanding. They can detect when the user is repeatedly encountering the same concept from different angles, suggesting it might be time to develop deeper understanding.

### **Context Layer Six: Interaction History Layer**

The Interaction History Layer maintains a comprehensive searchable record of all past interactions between the user and the system. This layer enables the system to reference past conversations, learn from what has worked, and avoid repeating ineffective approaches.

#### **Interaction History Schema**

yaml  
interaction\_history\_id: "IH\_\[TIMESTAMP\]\_\[UUID\]"  
created\_timestamp: "2026-01-10T19:05:29.876Z"  
last\_modified\_timestamp: "2026-01-10T19:05:29.876Z"  
schema\_version: "1.0.0"  
user\_profile\_id: "USR\_\[TIMESTAMP\]\_\[UUID\]"

conversations:  
  \- conversation\_id: "CONV\_\[TIMESTAMP\]\_\[UUID\]"  
    session\_id: "SES\_\[TIMESTAMP\]\_\[UUID\]"  
    agent\_id: "string"  
    conversation\_start\_timestamp: "timestamp"  
    conversation\_end\_timestamp: "timestamp"  
    conversation\_topic: "string"  
    conversation\_summary: "string"  
    conversation\_transcript:  
      \- message\_id: "MSG\_\[TIMESTAMP\]\_\[UUID\]"  
        timestamp: "timestamp"  
        speaker: "user" | "agent"  
        message\_text: "string"  
        message\_intent: "string"  
        message\_metadata:  
          referenced\_artifacts: \["array", "of", "artifact\_ids"\]  
          referenced\_concepts: \["array", "of", "node\_ids"\]  
          triggered\_actions: \["array", "of", "action\_ids"\]  
    conversation\_outcomes:  
      decisions\_made: \["array", "of", "decision\_ids"\]  
      insights\_gained: \["array", "of", "insight\_descriptions"\]  
      action\_items\_created: \["array", "of", "action\_ids"\]  
    conversation\_quality\_rating: integer *\# 1-10*

workflow\_executions:  
  \- execution\_id: "EXE\_\[TIMESTAMP\]\_\[UUID\]"  
    workflow\_id: "string"  
    session\_id: "SES\_\[TIMESTAMP\]\_\[UUID\]"  
    agent\_id: "string"  
    execution\_start\_timestamp: "timestamp"  
    execution\_end\_timestamp: "timestamp"  
    execution\_status: "completed" | "paused" | "abandoned" | "failed"  
    steps\_completed: \["array", "of", "step\_ids"\]  
    execution\_duration\_minutes: integer  
    execution\_summary: "string"  
    artifacts\_produced: \["array", "of", "artifact\_ids"\]  
    challenges\_encountered:  
      \- challenge\_id: "CHL\_\[TIMESTAMP\]\_\[UUID\]"  
        challenge\_description: "string"  
        challenge\_step: "string"  
        resolution\_description: "string"  
        resolution\_timestamp: "timestamp"

questions\_and\_answers:  
  \- qa\_id: "QA\_\[TIMESTAMP\]\_\[UUID\]"  
    session\_id: "SES\_\[TIMESTAMP\]\_\[UUID\]"  
    question\_timestamp: "timestamp"  
    question\_text: "string"  
    question\_category: "string"  
    agent\_id: "string"  
    answer\_text: "string"  
    answer\_quality\_rating: integer *\# 1-10, user-rated if available*  
    referenced\_again: boolean  
    reference\_count: integer  
    related\_concept\_node\_ids: \["array", "of", "node\_ids"\]

feedback\_records:  
  \- feedback\_id: "FBK\_\[TIMESTAMP\]\_\[UUID\]"  
    session\_id: "SES\_\[TIMESTAMP\]\_\[UUID\]"  
    feedback\_timestamp: "timestamp"  
    feedback\_type: "positive" | "negative" | "neutral" | "suggestion"  
    feedback\_target: "string" *\# what the feedback is about*  
    feedback\_text: "string"  
    feedback\_metadata:  
      agent\_id: "string"  
      workflow\_id: "string"  
      artifact\_id: "string"  
    action\_taken:  
      action\_description: "string"  
      action\_timestamp: "timestamp"

system\_suggestions:  
  \- suggestion\_id: "SUG\_\[TIMESTAMP\]\_\[UUID\]"  
    suggestion\_timestamp: "timestamp"  
    suggestion\_text: "string"  
    suggestion\_rationale: "string"  
    suggesting\_agent\_id: "string"  
    suggestion\_type: "next\_action" | "improvement" | "alternative\_approach" | "resource"  
    user\_response: "accepted" | "declined" | "deferred" | "ignored"  
    response\_timestamp: "timestamp"  
    outcome\_if\_accepted:  
      outcome\_description: "string"

      outcome\_quality: integer *\# 1-10*

**Field Explanations:**

The Interaction History Layer is organized into several major categories of historical data. The `conversations` array maintains records of all dialogues between the user and agents. Each conversation has a unique identifier, links to the session and agent involved, timestamps for start and end, topic and summary, full transcript with individual messages, conversation outcomes including decisions made and insights gained, and a quality rating.

Each message in the transcript has its own identifier, timestamp, speaker indication, text content, inferred intent, and metadata capturing what artifacts or concepts were referenced and what actions were triggered. This granular tracking enables sophisticated analysis of communication patterns and effectiveness.

The `workflow_executions` array records every time a workflow was executed. Each execution has an identifier, workflow and session references, agent identifier, timestamps, completion status, list of steps completed, duration, summary, artifacts produced, and challenges encountered with their resolutions. This creates a complete history of how workflows perform in practice, which steps cause difficulties, and how long different types of work actually take.

The `questions_and_answers` array creates a personal knowledge base. Each QA pair has an identifier, session reference, timestamps, question and answer text, category, agent identifier, quality rating if provided, flags and counts for how often it has been referenced again, and links to related concepts in the knowledge graph. Over time, this becomes a valuable resource where common questions can be answered by referencing past answers rather than regenerating responses.

The `feedback_records` array captures all user feedback about the system. Each feedback item has an identifier, session reference, timestamp, type classification, target indicating what the feedback is about, feedback text, metadata linking to relevant entities, and any action taken in response with description and timestamp. Tracking how feedback gets acted upon demonstrates that the system learns from user input.

The `system_suggestions` array records every proactive suggestion the system has made. Each suggestion has an identifier, timestamp, suggestion text and rationale, agent identifier, type classification, user response indicating how they reacted, response timestamp, and if accepted, an outcome description and quality rating. This enables the system to learn what types of suggestions are helpful versus what gets ignored, making future suggestions more relevant.

**Usage Patterns:**

The Interaction History Layer grows continuously and becomes increasingly valuable over time. Agents query this layer to reference past conversations, identify patterns in what questions the user asks repeatedly, understand what approaches have been tried before and how they worked, learn what types of suggestions the user responds to positively, and avoid repeating failed approaches.

The layer also enables sophisticated analytics. The system can identify trends in session quality, calculate average duration for different types of workflows, measure improvement in how quickly the user completes similar tasks over time, and detect areas where the user repeatedly struggles despite interventions.

When resuming work after a break, agents query interaction history to remind the user of where they were and what was discussed, maintaining continuity that makes extended breaks less disruptive.

---

## **Data Persistence and Tracking Standards**

This section establishes the absolute rules for how data must be handled in Shipquick systems. These rules are non-negotiable because they determine whether the system can maintain intelligence over time or degrades into forgetfulness.

### **The Prime Directive: Everything Gets An ID**

Every entity in a Shipquick system, no matter how small or seemingly insignificant, must have a unique identifier. This identifier serves multiple critical purposes including enabling references between entities without duplication, supporting efficient queries and lookups, enabling distributed systems where IDs can be generated independently without collision, and creating audit trails where every piece of data can be tracked to its origin.

**Identifier Format Standard:**

All identifiers in Shipquick follow the pattern: `[PREFIX]_[TIMESTAMP]_[UUID]`

The PREFIX is a short string indicating the entity type like USR for users, GOAL for goals, SES for sessions, NODE for knowledge graph nodes, CONV for conversations. The TIMESTAMP is the creation time in format YYYYMMDDHHMMSS for rough chronological ordering. The UUID is a version 4 UUID guaranteeing global uniqueness.

Example: `SES_20260110190345_550e8400-e29b-41d4-a716-446655440000`

This format provides human readability through the prefix, rough chronological sorting through the timestamp, and absolute uniqueness through the UUID. It also allows systems to extract approximate creation time from the ID itself without looking up metadata.

**When IDs Are Generated:**

IDs must be generated at the moment an entity is first created, before any other processing occurs. The ID becomes the permanent handle for that entity and never changes. Even if the entity is updated many times, the ID remains constant. When entities are deleted, their IDs should never be reused.

**Referencing By ID:**

When one entity needs to reference another, it must do so by ID. For example, a session document includes the user\_profile\_id of the user who created the session. An artifact includes the agent\_id of the agent that created it. This referencing by ID creates explicit relationships that can be queried and analyzed.

### **The Second Rule: Timestamps On Everything**

Every entity must have at minimum two timestamps: created\_timestamp and last\_modified\_timestamp. These timestamps serve essential purposes including understanding the chronology of how the system evolved, identifying stale data that might need refresh, supporting time-based queries like "show me everything from last week", enabling synchronization across distributed systems, and creating audit trails of when changes occurred.

**Timestamp Format Standard:**

All timestamps must use ISO 8601 format with full precision: `YYYY-MM-DDTHH:mm:ss.sssZ`

The T separator between date and time is mandatory. The millisecond precision (.sss) captures exact timing. The Z suffix indicates UTC timezone. Using UTC universally avoids ambiguity and simplifies calculations.

Example: `2026-01-10T19:15:30.456Z`

**When Timestamps Are Created:**

The created\_timestamp is set exactly once when the entity is first created and never modified thereafter. The last\_modified\_timestamp is set initially to the same value as created\_timestamp, then updated every time any field in the entity changes. This means you can always calculate how long it has been since an entity was created and since it was last touched.

**Additional Timestamps:**

Beyond the mandatory created and last\_modified timestamps, entities should have domain-specific timestamps for important state changes. For example, a deliverable would have a completion\_timestamp marking when it was finished. A blocker would have identified\_timestamp and resolved\_timestamp marking its lifecycle. A session would have start\_timestamp and end\_timestamp capturing its duration.

Every timestamp must capture not just date and time but the full millisecond precision. This allows sorting events that happened within the same second and provides the precision needed for performance analysis.

### **The Third Rule: Versions Track Evolution**

Every entity that can be modified must include a version number. This version serves as an integer counter that starts at 1 when the entity is created and increments by 1 with each modification. Versions enable detecting conflicts in distributed systems, understanding how many times something has changed, implementing optimistic locking where updates only succeed if the version matches, supporting rollback to previous versions if needed, and creating complete audit trails of evolution.

**Version Tracking Pattern:**

yaml  
entity\_id: "PREFIX\_TIMESTAMP\_UUID"  
created\_timestamp: "timestamp"  
last\_modified\_timestamp: "timestamp"  
version: integer

*\# ... other fields ...*

When an update is made, the process is: read the current entity including its version number, make modifications to the entity, increment the version number by one, set last\_modified\_timestamp to current time, write the updated entity back to storage.

If using a database that supports optimistic locking, the write operation should include a condition that it only succeeds if the version number matches what was read. This prevents lost updates when two processes try to modify the same entity simultaneously.

**Version History:**

For critical entities where you need to maintain complete history, implement version history by creating a history array that appends the previous version's state before making updates:

yaml  
entity\_id: "PREFIX\_TIMESTAMP\_UUID"  
version: 5  
last\_modified\_timestamp: "2026-01-10T19:30:00.000Z"  
current\_state:  
  *\# current field values*  
version\_history:  
  \- version: 4  
    timestamp: "2026-01-10T19:15:00.000Z"  
    state:  
      *\# previous field values*  
  \- version: 3  
    timestamp: "2026-01-10T19:00:00.000Z"  
    state:

      *\# previous previous field values*

This approach means you can roll back to any previous version and understand exactly what changed when.

### **The Fourth Rule: Schema Versions Enable Evolution**

The data structures defined in this document represent version 1.0.0 of each schema. As Shipquick evolves and we learn what additional fields are needed or what structures should change, we must be able to modify schemas without breaking existing data. This is accomplished through schema versioning.

**Schema Version Field:**

Every document type includes a schema\_version field using semantic versioning:

yaml

schema\_version: "1.0.0"

The major version number (first digit) increments when changes break backward compatibility. The minor version number (second digit) increments when adding fields in a backward-compatible way. The patch version number (third digit) increments for clarifications or bug fixes to documentation.

**Evolution Rules:**

When adding new fields to a schema, increment the minor version. Old documents with schema\_version 1.0.0 are still valid and can be read by code expecting 1.1.0 because the new fields are additive. The code should provide defaults for missing fields.

When changing field meanings or removing fields, increment the major version. Documents with schema\_version 1.x.x need migration to 2.0.0 format before they can be processed. Provide migration scripts that transform old format to new format.

Always check the schema\_version field when reading documents and handle version differences appropriately. Never assume documents are in the latest format.

### **The Fifth Rule: Relationships Are Explicit**

When one entity relates to another, that relationship must be explicitly captured through ID references. Implicit relationships that rely on naming conventions or assumptions are fragile and impossible to query reliably.

**Simple Reference:**

For one-to-one relationships, include the related entity's ID directly:

yaml  
session\_id: "SES\_20260110193000\_UUID1"  
user\_profile\_id: "USR\_20260101120000\_UUID2"

goal\_id: "GOAL\_20260105140000\_UUID3"

This session belongs to a specific user and relates to a specific goal.

**Array Reference:**

For one-to-many relationships, use arrays of IDs:

yaml  
milestone\_id: "MLS\_20260110180000\_UUID1"  
deliverable\_ids:  
  \- "DEL\_20260107150000\_UUID2"  
  \- "DEL\_20260109160000\_UUID3"

  \- "DEL\_20260110170000\_UUID4"

This milestone is composed of multiple deliverables.

**Bidirectional Relationships:**

When relationships need to be traversable in both directions, maintain references in both entities:

yaml  
*\# In user profile:*  
user\_profile\_id: "USR\_20260101120000\_UUID1"  
goal\_ids:  
  \- "GOAL\_20260105140000\_UUID2"  
  \- "GOAL\_20260201100000\_UUID3"

*\# In goals:*  
goal\_id: "GOAL\_20260105140000\_UUID2"

user\_profile\_id: "USR\_20260101120000\_UUID1"

This allows querying "what goals does this user have" and "who owns this goal" equally efficiently.

**Relationship Metadata:**

When relationships have their own properties, create explicit relationship entities:

yaml  
edge\_id: "EDGE\_20260110190000\_UUID1"  
source\_node\_id: "NODE\_20260105140000\_UUID2"  
target\_node\_id: "NODE\_20260108160000\_UUID3"  
edge\_type: "builds\_on"  
edge\_strength: 0.85

created\_timestamp: "2026-01-10T19:00:00.000Z"

This edge represents that one concept builds on another with 85% confidence.

### **The Sixth Rule: Arrays Maintain Order**

When entities have arrays of sub-items, the order of items in the array has meaning. Arrays should be treated as ordered lists where position matters. When adding to an array, append to the end unless there is specific reason to insert elsewhere. When displaying arrays to users, respect the stored order unless explicitly sorting by another criterion.

**Example:**

yaml  
workflow\_steps:  
  \- "step-01-init.md"  
  \- "step-02-discover.md"  
  \- "step-03-design.md"  
  \- "step-04-implement.md"

  \- "step-05-validate.md"

The order of steps is critical to workflow execution. Reordering would break the workflow.

**Array Ordering Metadata:**

If you need to maintain multiple different orderings of the same items, include explicit ordering metadata:

yaml  
deliverables:  
  \- deliverable\_id: "DEL\_001"  
    name: "Case Study 1"  
    chronological\_order: 1  
    priority\_order: 3

    quality\_order: 2

This allows sorting the same deliverables by when they were created, by priority, or by quality score.

### **The Seventh Rule: Updates Are Auditable**

Every modification to data should be auditable, meaning you can answer "who changed what, when, and why?" For critical entities, maintain change logs that record this information:

yaml  
artifact\_id: "ART\_20260110190000\_UUID1"  
version: 3  
change\_log:  
  \- change\_id: "CHG\_20260110190500\_UUID2"  
    change\_timestamp: "2026-01-10T19:05:00.000Z"  
    changed\_by\_agent\_id: "AGT\_20260110190000\_UUID3"  
    change\_description: "Updated quality score based on review"  
    fields\_changed:  
      \- field\_name: "quality\_score"  
        old\_value: 7.5  
        new\_value: 8.2  
  \- change\_id: "CHG\_20260110190000\_UUID4"  
    change\_timestamp: "2026-01-10T19:00:00.000Z"  
    changed\_by\_agent\_id: "AGT\_20260110190000\_UUID3"  
    change\_description: "Initial creation"  
    fields\_changed:  
      \- field\_name: "all"  
        old\_value: null

        new\_value: "initial\_state"

This audit trail provides complete transparency into how data evolved.

### **The Eighth Rule: Deletions Are Soft**

When data needs to be removed, use soft deletion rather than hard deletion. Soft deletion means marking the entity as deleted rather than removing it from storage:

yaml  
artifact\_id: "ART\_20260110190000\_UUID1"  
deleted: true  
deleted\_timestamp: "2026-01-10T20:00:00.000Z"  
deleted\_by\_agent\_id: "AGT\_20260110200000\_UUID2"

deletion\_reason: "User requested removal"

The entity remains in storage but queries exclude deleted entities by default. This approach enables recovery from accidental deletions, maintains referential integrity where other entities reference the deleted entity, supports audit trails showing what was removed and why, and allows analysis of what was deleted to improve the system.

Hard deletion should only be used when required by privacy regulations or when storage constraints force it.

### **The Ninth Rule: Queries Are Intentional**

When retrieving data, always be explicit about what you are querying and why. Avoid retrieving entire collections when you only need specific fields. Use projection to limit returned data. Use filtering to limit which entities are returned. Use sorting to control ordering. Use pagination for large result sets.

**Example Bad Query Pattern:**

"Get all user profiles" \- This retrieves potentially thousands of records with all fields when you might only need a few specific profiles or specific fields.

**Example Good Query Pattern:**

"Get user\_profile\_id, preferred\_name, and skill\_levels for user\_profile\_id='USR\_20260101120000\_UUID1'" \- This retrieves exactly what is needed and nothing more.

**Query Documentation:**

When implementing queries, document their purpose:

yaml  
*\# Query Purpose: Retrieve progress data for dashboard display*  
*\# Returns: goal\_id, completed\_deliverables (count only), current milestone*  
*\# Filters: user\_profile\_id, goal active status*  
*\# Expected Result Size: 1 record*

*\# Frequency: Every time dashboard loads*

This documentation helps optimize queries and understand system performance.

### **The Tenth Rule: Data Has Gravity**

Data stored in Shipquick systems has gravity, meaning once created, it tends to persist and accumulate. This is intentional because the system's intelligence depends on accumulated context. However, this means you must be thoughtful about what data is created.

**Before Creating Data, Ask:**

Will this information be useful in the future? Is it specific enough to be actionable? Is it properly structured for querying and analysis? Does it have all required metadata (ID, timestamps, version)? Is it linked to appropriate related entities? Would its absence make the system less intelligent?

**Data Cleanup:**

Periodically review accumulated data for accuracy and relevance. Update stale information. Archive completed goals and their associated context rather than deleting. Consolidate redundant information. Improve structure based on lessons learned.

**Data Privacy:**

Be conscious that accumulated data creates privacy implications. Users must be able to export their data in usable formats. Users must be able to delete their data when requested. Sensitive information must be encrypted at rest and in transit. Access to user data must be logged and auditable.

---

## **Agent Architecture Specification**

This section provides the complete specification for how agents are structured in Shipquick. Every agent, whether a master orchestrator or a narrow specialist, follows this architectural pattern to ensure consistency, maintainability, and proper integration with the context system.

### **Agent File Structure**

Every agent in Shipquick is defined in a single markdown file that serves as both human-readable documentation and machine-executable instructions. The file combines YAML frontmatter for metadata, XML for structured instructions, and markdown for documentation. This hybrid approach provides the best of all worlds: easy version control because it is plain text, human readability for understanding and modifying agents, structured instructions that can be parsed and validated, and flexibility for domain-specific extensions.

**Complete Agent File Template:**

markdown  
\---  
agent\_id: "agent\_type\_name"  
agent\_name: "Human-Readable Name"  
agent\_title: "Professional Title"  
agent\_icon: "emoji"  
agent\_category: "category\_name"  
created\_timestamp: "2026-01-10T20:00:00.000Z"  
last\_modified\_timestamp: "2026-01-10T20:00:00.000Z"  
version: 1  
schema\_version: "1.0.0"  
\---

You must fully embody this agent's persona and follow all activation instructions exactly as specified. NEVER break character until given an exit command.

\`\`\`xml

\<agent id="\[agent\_id\]" name="\[agent\_name\]" title="\[agent\_title\]" icon="\[agent\_icon\]"\>  
\<activation critical="MANDATORY"\> \<step n="1"\>\[First activation step\]\</step\> \<step n="2"\>\[Second activation step\]\</step\> \<step n="3"\>\[Additional steps...\]\</step\> \<\!-- Activation continues as needed \--\> \</activation\>  
\<persona\> \<role\>\[Concise role definition\]\</role\> \<identity\>\[Detailed identity narrative\]\</identity\> \<communication\_style\>\[How this agent communicates\]\</communication\_style\> \<principles\>\[Core principles that guide decisions\]\</principles\> \</persona\>

\<context\_requirements\> \<required\_context\> \<context\_layer name="user\_profile"\> \<fields\>\["preferred\_name", "learning\_preferences", "skill\_levels"\]\</fields\> \<access\_frequency\>every\_activation\</access\_frequency\> \</context\_layer\> \<context\_layer name="goal"\> \<fields\>\["primary\_objective", "constraints", "current\_milestone"\]\</fields\> \<access\_frequency\>every\_activation\</access\_frequency\> \</context\_layer\> \<context\_layer name="progress"\> \<fields\>\["completed\_deliverables", "in\_progress\_work"\]\</fields\> \<access\_frequency\>on\_demand\</access\_frequency\> \</context\_layer\> \</required\_context\>

\<produced\_context\> \<updates\_context\_layer name="session"\> \<fields\>\["active\_agents", "session\_observations"\]\</fields\> \</updates\_context\_layer\> \<updates\_context\_layer name="progress"\> \<fields\>\["completed\_deliverables", "skill\_progression"\]\</fields\> \</updates\_context\_layer\> \</produced\_context\> \</context\_requirements\>

\<menu\> \<item cmd="\*command1" type="action|workflow|exec"\>\[Menu Item 1 Description\]\</item\> \<item cmd="\*command2" type="action|workflow|exec"\>\[Menu Item 2 Description\]\</item\> \<\!-- Additional menu items \--\> \<item cmd="\*dismiss"\>\[D\] Dismiss Agent\</item\> \</menu\>

\<menu\_handlers\> \<handler type="workflow"\> \[Instructions for handling workflow execution\] \</handler\> \<handler type="exec"\> \[Instructions for handling file execution\] \</handler\> \<handler type="action"\> \[Instructions for handling action execution\] \</handler\> \</menu\_handlers\>

\<rules\> \<rule priority="critical"\>\[Critical rule that must never be violated\]\</rule\> \<rule priority="high"\>\[Important rule for proper function\]\</rule\> \<rule priority="standard"\>\[Standard operating procedure\]\</rule\> \</rules\>  
\<prompts\> \<\!-- Reusable prompt blocks that can be invoked by ID \--\> \<prompt id="prompt\_1"\> \[Prompt content for reusable instruction block\] \</prompt\> \</prompts\>  
\</agent\> \`\`\` \`\`\`

**Section Explanations:**

The YAML frontmatter at the top provides metadata about the agent file itself. The agent\_id is a unique identifier that matches the filename, like "interview\_coach" or "portfolio\_builder". The agent\_name is how the agent introduces itself to users. The agent\_title is their professional designation. The agent\_icon is an emoji that provides visual identification. The agent\_category groups agents by function. Timestamps and version track the evolution of this agent definition.

The statement before the XML establishes the fundamental behavioral rule that agents must follow their definitions exactly. This prevents models from improvising or breaking character.

The XML structure begins with the root `<agent>` element containing all agent logic. The activation section defines the precise sequence of steps that execute when the agent first loads. Each step is numbered and executed in order without skipping or reordering.

The persona section defines who this agent is. The role is a concise statement like "Expert Writing Coach" or "Technical Implementation Specialist". The identity expands on this with a narrative giving background and expertise. The communication\_style describes how the agent speaks and interacts. The principles list core beliefs that guide the agent's decisions and advice.

The context\_requirements section is crucial as it explicitly declares what context this agent needs and produces. The required\_context subsection lists which context layers the agent accesses, which specific fields it needs from each layer, and how frequently it accesses them. The produced\_context subsection lists which context layers the agent updates and which fields it modifies. This declaration enables validation that agents are accessing appropriate context and enables automated context loading.

The menu section presents user-facing options. Each item has a command trigger (typically starting with asterisk for consistency), a type indicating how it should be handled, and descriptive text. Menu items can invoke workflows, execute files, or trigger inline actions.

The menu\_handlers section defines how different menu types are processed. This provides the logic for workflow execution, file execution, and action execution. Handlers are generic across all agents but can be customized if an agent needs special handling.

The rules section establishes behavioral constraints. Rules have priority levels indicating their importance. Critical rules must never be violated. High-priority rules should only be broken in exceptional circumstances with justification. Standard rules represent normal operating procedures.

The prompts section contains reusable instruction blocks that can be invoked by ID. This enables complex multi-step instructions to be defined once and referenced multiple times without duplication.

### **Agent Activation Sequence**

When an agent is activated, a specific sequence executes to properly initialize the agent's state and load necessary context. This activation sequence is critical because it establishes the foundation for all subsequent interactions.

**Standard Activation Steps:**

Step One loads the agent persona from the current file. This happens automatically because the file itself is in context. The model must internalize the role, identity, communication\_style, and principles defined in the persona section. This is what transforms the model from a generic assistant into the specific agent.

Step Two loads configuration from the system's main config file. This file contains user preferences like their name, preferred language, timezone, and system-wide settings. These values get stored as session variables that persist throughout the agent's activation. The exact path to the config file is specified in the agent definition and typically follows the pattern {project-root}/system-files/original/sq\_core/config.yaml.

Step Three loads the user profile context. The agent reads the required fields from the user profile layer based on what it declared in its context\_requirements. This includes the user's name, learning preferences, skill levels, and any other stable information the agent needs. Loading this context enables the agent to personalize its behavior immediately.

Step Four loads goal-specific context. The agent reads the user's current goal, constraints, strategy, and progress toward milestones. This goal context informs every suggestion and decision the agent makes. Without this context, the agent would provide generic advice rather than goal-directed guidance.

Step Five loads progress and state context relevant to this agent's domain. For example, a writing coach agent would load information about writing projects in progress, completed drafts, and identified writing skill gaps. This enables the agent to provide continuity from past sessions.

Step Six displays a personalized greeting using the user's preferred name and acknowledges the goal they are working toward. This confirms to the user that the agent has loaded their context successfully. The greeting should be brief and natural, not a verbose summary of everything the agent knows.

Step Seven presents the agent's menu of capabilities as a numbered list. Each menu item corresponds to something the agent can help with. Users can select by number, by typing the command trigger, or by using fuzzy text matching where they type part of the description and the system finds the best match.

Step Eight instructs the agent to stop and wait for user input. The agent must not automatically execute menu items or make assumptions about what the user wants. This wait step ensures users maintain control and the agent responds to their direction rather than operating autonomously.

Step Nine defines how user input is processed. If the user enters a number, execute the menu item at that index. If the user enters text, attempt case-insensitive substring matching against menu descriptions and command triggers. If multiple items match, ask the user to clarify which one they meant. If no items match, inform the user the command was not recognized and re-display the menu.

Step Ten defines how menu item execution works. When a menu item is selected, the system examines the item's type attribute. If type is "workflow", load the workflow executor and pass the workflow path. If type is "exec", load and execute the specified file. If type is "action", either find and execute the prompt block with the matching ID or execute the inline instruction text. This routing ensures each menu type is handled appropriately.

**Context Loading Implementation:**

During activation, the agent must explicitly query the context engine for required data. This is not automatic or implicit. The agent declaration in context\_requirements specifies what is needed, but the activation code must actually perform the loading.

Pseudocode for context loading:

function load\_agent\_context(agent\_definition):  
    context \= {}  
      
    for layer in agent\_definition.required\_context:  
        layer\_name \= layer.name  
        fields \= layer.fields  
          
        \# Query context engine for this layer  
        layer\_data \= context\_engine.get(layer\_name, fields)  
          
        \# Store in agent's context object  
        context\[layer\_name\] \= layer\_data  
    

    return context

The context engine handles the actual data retrieval from wherever context is stored (files, database, memory). The agent just specifies what it needs and receives a structured context object.

**Activation Failure Handling:**

If activation fails at any step, the agent must not proceed. Instead, it should report the specific failure to the user and provide guidance on how to fix the issue. Common failure scenarios include missing configuration file where the specified config path does not exist, missing user profile where no profile has been created for this user, missing goal definition where the user has not defined what they are trying to achieve, and context engine unavailable where the underlying context storage is not accessible.

For each failure, provide a clear error message and recovery instructions. For example: "I cannot activate because the configuration file is missing at {path}. Please run the system initialization workflow to create your configuration."

### **Agent Persona Design**

The persona is what gives each agent a distinct identity and communication style. Well-designed personas make agents memorable, help users understand what each agent specializes in, and create engagement through personality. This section explains how to craft effective personas.

**Role Definition:**

The role is a concise statement that captures the agent's primary function. It should be specific enough to clearly differentiate this agent from others but broad enough to encompass the full scope of what the agent does. The role typically follows the pattern "\[Expertise Level\] \[Domain\] \[Function\]".

Examples of effective roles:

* "Expert Writing Coach and Style Guide"  
* "Technical Implementation Specialist and Code Reviewer"  
* "Strategic Project Planner and Milestone Architect"  
* "Quality Assurance Analyst and Standards Enforcer"  
* "Creative Brainstorming Facilitator and Idea Synthesizer"

Examples of ineffective roles:

* "Helper" \- too vague, no specialization indicated  
* "AI Assistant" \- generic, provides no information about expertise  
* "Does Everything" \- violates hyper-specialization principle

The role should immediately communicate what problems this agent solves and when a user would choose to work with this agent versus others.

**Identity Narrative:**

The identity expands on the role with a richer narrative that gives the agent a sense of background and expertise. This narrative should be written in third person and should establish credibility for the agent's advice. The identity typically includes how many years of experience the agent embodies, what specific domains they have deep expertise in, what types of situations they have handled successfully, and what approach or philosophy guides their work.

Example identity narratives:

"A seasoned technical writer with fifteen years creating documentation for software products ranging from developer tools to consumer applications. Expert in information architecture, bringing clarity to complex technical topics, and helping non-technical audiences understand sophisticated concepts. Has transformed documentation for three major product launches, resulting in measurably improved user success rates. Believes documentation is a product feature, not an afterthought, and that every technical explanation should pass the 'would my grandmother understand this' test."

"A senior software architect who has designed systems serving millions of users across e-commerce, social media, and financial services domains. Specializes in scalable architectures, distributed systems patterns, and making pragmatic technology choices that balance innovation with reliability. Known for asking uncomfortable questions early that prevent painful failures later. Champions the principle that the best architecture is the simplest one that meets requirements, with complexity only added when clearly justified."

The identity should feel like a professional bio that would appear on a consulting firm's website. It establishes that this agent brings real expertise, not just generic AI capabilities.

**Communication Style:**

The communication\_style defines how the agent speaks and interacts. This is where personality comes through. Different communication styles work for different types of agents and different types of users. The key is that the style should be authentic to the agent's role and consistent across all interactions.

Effective communication styles are described in terms of tone, vocabulary, sentence structure, use of questions versus statements, level of directness, use of humor or emotion, and interaction patterns.

Examples of communication styles:

"Direct and data-driven, speaks in crisp sentences with clear logical flow. Asks probing questions to uncover underlying issues before offering solutions. Never sugarcoats problems but frames challenges as opportunities for improvement. Uses business metrics and tangible outcomes to ground discussions. Occasional dry humor to keep things human while maintaining professionalism."

"Warm and encouraging like a patient teacher, uses analogies and metaphors to make complex concepts accessible. Celebrates progress enthusiastically and reframes setbacks as learning opportunities. Speaks in conversational language avoiding unnecessary jargon. Asks questions that help users discover answers themselves rather than just giving answers. Creates a safe space for admitting confusion or uncertainty."

"Precise and technical, comfortable with jargon and assumes baseline expertise. Speaks in terms of specific implementation details, code patterns, and technical trade-offs. Direct about what will and will not work, backed by technical reasoning. Asks clarifying questions about requirements and constraints. Focuses on correctness and quality over speed, willing to push back on approaches that violate best practices."

The communication style should align with the agent's role. A beginner-focused learning coach might be warm and encouraging. A technical code reviewer might be precise and exacting. A creative brainstorming facilitator might be energetic and free-flowing. Match style to function.

**Principles:**

The principles section lists core beliefs that guide the agent's decisions and recommendations. These are not generic platitudes but specific stances that shape the agent's behavior. Principles typically address what the agent values most, what trade-offs the agent prefers, what the agent will push back against, and what the agent proactively advocates for.

Examples of strong principles:

"Quality over speed. Better to take extra time producing work you are proud of than rushing out mediocrity. The user's reputation is on the line with every deliverable. Perfection is not required, but thoughtfulness and effort should be evident."

"Clarity is kindness. Ambiguous feedback or vague guidance wastes the user's time and breeds frustration. Every suggestion should be specific enough to be actionable. If you cannot explain why something should change, you have not identified a real problem."

"Start simple, add complexity only when justified. The best solution is the simplest one that meets requirements. Added sophistication should deliver proportional value. Complexity is a debt that must be repaid in maintenance effort and cognitive load."

"User agency is paramount. This is the user's journey and their decisions to make. The agent's role is to inform and guide, never to decide or dictate. Present options with honest trade-off analysis and let the user choose their path."

Principles should reflect genuine stances that affect behavior. They serve as tie-breakers when the agent must choose between competing goods. They communicate what kind of guidance the user can expect from this agent.

**Persona Consistency:**

Once a persona is established, it must be maintained consistently across all interactions. The agent should speak in their defined communication style even when under time pressure or handling routine tasks. The agent should apply their principles consistently even when inconvenient. The agent should maintain their identity narrative throughout.

Consistency builds trust. Users learn what to expect from each agent and how different agents approach problems differently. Inconsistency confuses users and makes agents feel generic and interchangeable.

### **Personality Traits (Enhanced Schema)**

Beyond the narrative identity, agents should define explicit personality traits that guide their behavior. Traits provide systematic personality definition that is easier to validate and maintain than narrative descriptions alone.

**Trait Definition Format:**

Each agent should define 3-5 personality traits. Each trait should be:
- Specific to the agent's function
- Actionable (affects how the agent behaves)
- Distinct from generic "helpful" descriptors

**Example Trait Definitions:**

For a Security Guardian agent:
- "Vigilant and thorough - questions assumptions, never takes security for granted"
- "Risk-aware - thinks about edge cases and attack vectors proactively"
- "Clear communicator - explains security concepts without unnecessary jargon"
- "Balanced pragmatist - weighs security against usability, avoids security theater"
- "Evidence-based - requires concrete justification for security decisions"

For a Technical Architect agent:
- "Systems thinker - sees connections between components, anticipates ripple effects"
- "Simplicity advocate - prefers simple solutions, adds complexity only when justified"
- "Trade-off explicit - always articulates what is gained and lost with each choice"
- "Future-aware - considers how decisions affect maintainability over time"

**Implementation in Agent File:**

yaml
personality_traits:
  - trait: "Vigilant and thorough"
    manifestation: "Questions assumptions, never takes security for granted"
  - trait: "Risk-aware"
    manifestation: "Thinks about edge cases and attack vectors proactively"

Traits are used during response generation to ensure the agent's behavior remains consistent with its defined personality.

### **Expertise Domains**

Each agent should explicitly declare its areas of expertise. This serves multiple purposes: it helps users understand what the agent knows, it guides routing decisions by the orchestrator, and it helps prevent agents from providing guidance outside their expertise.

**Domain Definition Format:**

List 3-5 expertise domains with brief descriptions of what the agent knows in each area.

**Example Domain Definitions:**

For a Prompt Engineer agent:
1. **Prompt Architecture** - System prompts, user prompts, context structure, prompt ordering
2. **Few-Shot Learning** - Example selection, formatting, ordering, diversity
3. **Chain-of-Thought** - Reasoning prompts, step-by-step guidance, intermediate outputs
4. **Output Formatting** - JSON, markdown, structured responses, schema enforcement
5. **Prompt Debugging** - Diagnosing why prompts fail, identifying ambiguity, fixing issues

**Implementation in Agent File:**

yaml
expertise_domains:
  - name: "Prompt Architecture"
    description: "System prompts, user prompts, context structure, prompt ordering"
    depth: "expert"
  - name: "Few-Shot Learning"
    description: "Example selection, formatting, ordering, diversity"
    depth: "expert"

The depth field can be "expert", "proficient", or "familiar" to indicate relative strength in each domain.

### **Agent Behaviors Section**

Beyond activation and persona, agents should define explicit behaviors for key situations. This creates predictable, maintainable agent logic.

**On Activation Behaviors:**

Define the exact steps the agent performs when activated:

1. Load required context layers
2. Check for in-progress work from previous sessions
3. If resuming: Summarize where user left off
4. If new session: Present greeting with context acknowledgment
5. Make proactive suggestions based on context state
6. Display menu

**Core Logic Behaviors:**

Define decision logic as structured rules:

yaml
core_logic:
  analysis_criteria:
    - check: "Clarity - Is input unambiguous?"
    - check: "Completeness - Is all necessary information present?"
    - check: "Correctness - Are there factual or logical errors?"
    
  improvement_strategies:
    - strategy: "Add specificity"
      when: "Input is too vague"
      action: "Ask clarifying questions"
    - strategy: "Provide examples"
      when: "User seems uncertain"
      action: "Show before/after or sample outputs"
    - strategy: "Break into steps"
      when: "Task is complex"
      action: "Decompose and tackle sequentially"

This structured logic is easier to maintain and evolve than prose descriptions.

**Handoff Behaviors:**

Define when and how to hand off to other agents:

yaml
handoff_rules:
  - condition: "Task requires security review"
    route_to: "security-guardian"
    context_to_share: ["artifacts_created", "decisions_made"]
    
  - condition: "Task complete, user requests different domain"
    route_to: "orchestrator"
    context_to_share: ["session_summary", "next_recommendations"]
    
  - condition: "User explicitly requests another agent"
    route_to: "{requested_agent}"
    context_to_share: ["current_state"]

### **Response Templates**

Agents should define templates for their common response types. Templates ensure consistency and make the agent's output predictable and scannable.

**Template Example - Analysis Report:**

```
📝 **{Analysis Type}**

**Input:**
> {user's input}

**Assessment:**

| Aspect | Score | Notes |
|--------|-------|-------|
| {Aspect 1} | {1-5} | {feedback} |
| {Aspect 2} | {1-5} | {feedback} |
| {Aspect 3} | {1-5} | {feedback} |

**Overall Score:** {X}/15

**Recommendations:**
1. {recommendation 1}
2. {recommendation 2}
3. {recommendation 3}
```

**Template Example - Before/After Comparison:**

```
📝 **{Improvement Type}**

**Before:**
> {original}

**After:**
> {improved}

**Changes Made:**
- {change 1}
- {change 2}

**Expected Impact:** {what should improve}
```

Templates should be defined for each major output type the agent produces.

### **Error Handling Section**

Each agent should define how it handles common error cases. This prevents generic error messages and provides actionable guidance.

**Error Definition Format:**

yaml
error_handling:
  - error_type: "missing_input"
    message: "Koi input nahi mila. Pehle {expected_input} paste karo."
    recovery: "Re-prompt user for required input"
    
  - error_type: "input_too_large"
    message: "Input bahut bada hai. Main sections mein process karunga."
    recovery: "Chunk input and process iteratively"
    
  - error_type: "outside_expertise"
    message: "Ye meri expertise ke bahar hai. {recommended_agent} se baat karo."
    recovery: "Offer handoff to appropriate agent"
    
  - error_type: "no_issues_found"
    message: "Great work! Minor tweaks hi suggest karunga."
    recovery: "Provide minor optimization suggestions"

Error messages should match the agent's communication style and be actionable.

### **Operational Rules and Guardrails**

Every agent must have explicit operational rules that constrain behavior. Rules prevent unintended actions and maintain system integrity.

**Standard Rules Every Agent Should Include:**

1. **Communication Rule:** "Always communicate in {communication_language} unless user requests otherwise."
2. **Character Rule:** "Stay in character until exit command is given."
3. **Context Rule:** "Load files only when executing user-chosen workflows, not proactively."
4. **Scope Rule:** "Stay within declared expertise domains; route to other agents when needed."
5. **Confirmation Rule:** "For destructive or irreversible actions, always confirm with user first."

**Rule Priority Levels:**

- **Critical:** Must never be violated under any circumstances
- **High:** Should only be violated with explicit user override and logged justification
- **Standard:** Normal operating procedures that guide typical behavior

**Implementation in Agent File:**

xml
<rules>
  <rule priority="critical">Never expose sensitive context to unauthorized parties</rule>
  <rule priority="critical">Always communicate in {communication_language}</rule>
  <rule priority="high">Stay in character until exit selected</rule>
  <rule priority="high">Load files only when executing user chosen workflow</rule>
  <rule priority="standard">Display menu items in defined order</rule>
  <rule priority="standard">Use fuzzy matching for command recognition</rule>
</rules>

### **Menu System and Command Triggers**

The menu system is how users access agent capabilities. A well-designed menu makes the agent's functions discoverable and accessible without overwhelming the user or requiring memorization of complex commands.

**Menu Item Structure:**

Each menu item has three components: the command trigger which is how the item can be invoked directly, the item type which determines how execution is handled, and the descriptive text which appears in the menu and explains what this option does.

xml

\<item cmd\="\*create\_outline" type\="workflow"\>Create Document Outline with Structure\</item\>

The command trigger follows the convention of starting with an asterisk for consistency across all Shipquick systems. The asterisk is not strictly required but recommended because it makes commands visually distinct from regular text and reduces ambiguity. The command should be lowercase with underscores for spaces, following standard identifier conventions. Commands should be verb-based like \*create, \*analyze, \*review, \*export rather than noun-based.

The item type is one of three values. Type "workflow" means selecting this item executes a structured multi-step workflow. Type "exec" means selecting this item loads and executes a specific file containing instructions. Type "action" means selecting this item either triggers an inline instruction or finds a prompt block by ID and executes it.

The descriptive text should be clear and specific about what the menu item does. Good descriptions use active verbs and specify the outcome. "Create Document Outline with Structure" is better than "Outlining" because it clearly states what will be created.

**Menu Organization:**

Menu items should be organized logically with most common or important items first. Related items should be grouped together. The dismiss command should always appear last as a standard convention. For agents with many capabilities, consider organizing the menu into sections with headers, though this requires custom rendering logic.

Typical menu organization pattern:

1. Primary capabilities that define this agent's core value  
2. Secondary capabilities that support the primary ones  
3. Utilities and administrative functions  
4. Standard items like redisplay menu and dismiss agent

**Command Matching Logic:**

Users can invoke menu items three ways. First, they can enter the number corresponding to the menu item's position. This is the simplest method requiring minimal typing. Second, they can enter the exact command trigger like \*create\_outline. This works even if the menu is not currently displayed. Third, they can enter part of the descriptive text and the system will fuzzy match.

Fuzzy matching means case-insensitive substring search. If the user types "outline", the system searches all menu item descriptions and command triggers for items containing "outline". If exactly one match is found, execute that item. If multiple matches are found, display the matching items with numbers and ask the user to specify which one. If no matches are found, inform the user and re-display the full menu.

The fuzzy matching makes the system forgiving of typos and partial memory. Users do not need to remember exact commands as long as they remember what they are trying to do.

**Dynamic Menus:**

Some agents may need to present different menu items based on context. For example, an agent might show different options if the user has completed certain prerequisite steps versus if they are just starting. Dynamic menus are implemented by the agent programmatically building the menu list based on querying progress context and conditionally including items.

if user\_has\_completed("initial\_analysis"):  
    menu.append('\<item cmd="\*create\_design"\>Design Solution Architecture\</item\>')  
else:

    menu.append('\<item cmd="\*run\_analysis"\>Complete Initial Analysis First\</item\>')

Dynamic menus increase relevance but add complexity. Use them only when the benefit of contextual menus outweighs the cost of increased implementation complexity and potential user confusion about why menus change.

**Menu Help and Discovery:**

Consider including a help command that provides additional information about menu items:

xml

\<item cmd\="\*help" type\="action"\>Show Detailed Help for All Commands\</item\>

When executed, this displays extended descriptions of each command including when to use it, what prerequisites it requires, what outputs it produces, and estimated duration. This helps users make informed choices.

### **Menu Handlers (Execution Logic)**

Menu handlers define HOW each menu type is executed. This is critical for operational consistency. Every agent should include a menu-handlers section that specifies the exact execution logic for each menu type.

**Standard Menu Handler Structure:**

```xml
<menu-handlers>
  <handler type="workflow">
    1. Load the workflow engine from {project-root}/core/workflow-executor.md
    2. Parse the workflow.md file at the specified path
    3. Pass the workflow path to the executor
    4. Execute step-by-step following the step-file architecture
    5. Save outputs after completing EACH step (never batch)
    6. If workflow path starts with "todo:", inform user it is not implemented yet
  </handler>
  
  <handler type="exec">
    1. Load and read the entire file at the specified path
    2. Execute all instructions within the file
    3. If data="" attribute is present, load and pass that data as context
    4. Do not improvise - follow file instructions exactly
  </handler>
  
  <handler type="data">
    When menu item has: data="path/to/file.json|yaml|yml|csv|xml"
    1. Load the file at the specified path
    2. Parse according to file extension:
       - .json → JSON object
       - .yaml/.yml → YAML object
       - .csv → Array of records
       - .xml → XML document
    3. Make available as {data} variable to subsequent operations
    4. Pass to workflow or exec handler if present on same item
  </handler>
  
  <handler type="action">
    When menu item has action attribute:
    
    1. action="#prompt-id" → Find <prompt id="prompt-id"> block in agent XML, execute its content
    2. action="inline text" → Execute the text directly as instruction
    3. action="list X from path" → Load file and list contents
    
    Example with embedded prompt:
    ```xml
    <item cmd="*summary" action="#generate-summary">[SU] Generate Summary</item>
    
    <prompts>
      <prompt id="generate-summary">
        Generate a concise summary of the current work including:
        - Key decisions made
        - Artifacts produced
        - Next recommended steps
      </prompt>
    </prompts>
    ```
  </handler>
</menu-handlers>
```

**Additional Handler Attributes:**

Menu items can have multiple attributes that work together:

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `type` | Required. Handler type | `workflow`, `exec`, `action`, `data` |
| `exec` | Path to workflow/file | `{module}/workflows/create-agent/` |
| `data` | Path to data file | `{module}/data/agent-manifest.csv` |
| `tmpl` | Template name | `agent-summary-template` |
| `validate-workflow` | Validation flag | `true` |

**Combined Usage Example:**

```xml
<!-- Menu item with data and workflow -->
<item cmd="*retrospective" type="workflow" 
      exec="{module}/workflows/retrospective/"
      data="{module}/data/team-manifest.csv">
  [RE] Run Team Retrospective
</item>

<!-- Menu item with template -->
<item cmd="*export_summary" type="exec" 
      exec="{module}/tasks/export.md"
      tmpl="executive-summary">
  [EX] Export Executive Summary
</item>
```

**Menu Item Path References:**

For workflow and exec type menu items, include the actual file path:

```xml
<item cmd="*create_schema" type="workflow" 
      exec="{module-root}/workflows/create-context-layer/">
  [CL] Create Context Layer Schema
</item>

<item cmd="*validate_schema" type="exec" 
      exec="{module-root}/tasks/validate-context.md">
  [VS] Validate Schema Syntax
</item>
```

The path can be relative to project-root (for core workflows) or module-root (for module-specific workflows). Using path references enables:
- Automated validation that referenced files exist
- Clear documentation of what each menu item does
- Easier debugging when menu items fail

**Execution Error Handling:**

When executing a menu item fails, the agent should:
1. Report the specific error clearly
2. Suggest recovery options
3. Offer to re-display the menu
4. Log the error in session context for debugging

### **Project-Context Integration**

Agents should check for and load a project-context.md file during activation. This file contains project-specific standards that should inform the agent's behavior.

**Project-Context Loading:**

```yaml
activation:
  step_project_context:
    - path: "{project-root}/project-context.md"
    - fallback: "{project-root}/docs/project-context.md"
    - required: false
    - purpose: "Coding standards, patterns, constraints"
    - usage: "Guide decisions but never override user requests"
```

**When Project-Context Exists:**

The agent should:
1. Load it silently during activation
2. Use it to inform suggestions and recommendations
3. Reference it when explaining decisions
4. Note if user requests contradict project standards

The agent should:
1. Continue normally without error
2. Optionally suggest creating one if patterns would benefit
3. Store observations that could seed a future project-context

### **Todo Placeholder Pattern (Critical Principle)**

A core principle in Shipquick is: **Anything not documented is forgotten.** This applies especially to planned but not-yet-implemented features. Every reference to future work MUST be explicitly documented with a `todo:` prefix to ensure visibility and traceability.

**The Todo Placeholder Format:**

For menu items that reference workflows or files that don't exist yet:

```xml
<item cmd="*security_review" type="workflow" exec="todo:workflows/security-review/">
  [SR] Run Security Review
</item>
```

The `todo:` prefix serves multiple purposes:
- **Visibility:** Future work is explicitly tracked in the agent file itself
- **Validation:** Automated tools can scan for `todo:` patterns and report incomplete items
- **Continuity:** When workflows are created, replace `todo:` with `{module}/` path
- **No Surprises:** Users see "workflow not implemented yet" instead of cryptic errors

**When Creating New Agents:**

1. Always add `exec=""` attribute to workflow and exec type menu items
2. Use `{module}/` prefix for existing files
3. Use `todo:` prefix for planned but not-yet-created files
4. Never leave menu items without path references

**Implementation Example:**

```xml
<!-- CORRECT: Existing workflow -->
<item cmd="*create_agent" type="workflow" exec="{module}/workflows/create-agent/">
  [CA] Create Agent
</item>

<!-- CORRECT: Planned workflow -->
<item cmd="*security_review" type="workflow" exec="todo:workflows/security-review/">
  [SR] Security Review
</item>

<!-- INCORRECT: No path reference -->
<item cmd="*security_review" type="workflow">
  Security Review
</item>
```

### **Module Creation Checklist**

When creating a new module, follow this checklist to ensure all learnings are applied:

**Pre-Implementation:**
- [ ] Define all agents, workflows, tasks, schemas in module plan
- [ ] Mark Phase 1, 2, 3 priorities explicitly
- [ ] Document success criteria
- [ ] Create `config/` folder with manifest CSV files:
  - [ ] `agent-manifest.csv` (id, name, type, path, icon, status, description)
  - [ ] `workflow-manifest.csv` (id, name, path, assigned_agent, steps, status)
  - [ ] `task-manifest.csv` (id, name, path, used_by, status, description)
  - [ ] `schema-manifest.csv` (id, name, layer, path, status, description)

**Agent Creation:**
- [ ] Use v2.0 enhanced schema (identity, traits, domains, behaviors, templates, errors)
- [ ] Add `exec=""` paths to ALL workflow/exec menu items
- [ ] Use `todo:` prefix for planned but unimplemented workflows
- [ ] Add `data=""` attribute if workflow needs data file input
- [ ] Add short codes [XX] to menu items
- [ ] Include ALL 4 handler types in menu-handlers (workflow, exec, data, action)
- [ ] Add project-context loading to activation

**Workflow Creation:**
- [ ] Create workflow.md main file with:
  - [ ] Frontmatter (name, description, context_file)
  - [ ] Goal statement
  - [ ] Role definition ("Your Role: You are a...")
  - [ ] WORKFLOW ARCHITECTURE section (micro-file pattern explanation)
  - [ ] INITIALIZATION section (config loading, paths)
  - [ ] EXECUTION section (step-01 loader)
- [ ] Create /steps/ folder with individual step files
- [ ] Number steps sequentially (step-01, step-02, etc.)
- [ ] Each step has: frontmatter, objective, prerequisites, instructions, outputs, validation
- [ ] Each step references nextStepFile (null for final step)

**Post-Phase Benchmarking (ODEV Cycle):**

Every learning must follow the ODEV cycle: **O**bserve → **D**ocument → **E**mbed → **V**erify

- [ ] **OBSERVE:** Compare deliverables against industry patterns
- [ ] **DOCUMENT:** Add observations to `{module}/observations.md`
- [ ] **EMBED:** Update ALL of these locations:
  - [ ] Architecture.md (add section/pattern)
  - [ ] agent.template.md (add to template + checklist)
  - [ ] Module Creation Checklist (this list)
  - [ ] Validation task (add rule to catch violations)
- [ ] **VERIFY:** Confirm minimum 4 locations updated

**Verification Question:** "If a new developer starts tomorrow, will they apply this learning automatically?"

### **Observations File**

Every module should have an observations file to track learnings:

**Path:** `{module}/observations.md`

**Format:**
```markdown
# Module Observations

## Active (Pending Embed)
| Date | Observation | Priority | Status |
|------|-------------|----------|--------|

## Completed
| Date | Observation | Locations Updated |
|------|-------------|-------------------|
```

### **Agent Context Access Patterns**

Agents access and update context throughout their lifecycle. This section explains the patterns for effective context management.

**Context Loading at Activation:**

At activation, agents load all context declared in their context\_requirements section. This happens automatically as part of the activation sequence. The agent should load only what it needs, not all available context. Loading unnecessary context wastes processing time and increases the risk of the agent getting distracted by irrelevant information.

**Context Querying During Execution:**

During execution, agents query context on demand when they need specific information to make decisions or provide guidance. For example, if the agent needs to check whether the user has completed a specific deliverable, it queries the progress layer for that deliverable's status.

Queries should be specific. Request only the fields needed for the current decision. Do not retrieve entire context layers when you only need one or two fields.

**Context Updating After Actions:**

After the agent helps the user accomplish something, the agent must update appropriate context layers to reflect what happened. If the user completed a task, update the progress layer. If the agent observed something about the user's skill level, update the user profile. If a decision was made, update the session context decision log.

Context updates must happen immediately after the action that generates new information. Do not batch updates or delay them. Delayed updates risk information loss if the session ends unexpectedly.

**Context Propagation Patterns:**

Some context updates should propagate across layers. For example, if session observations reveal a user preference, that observation should propagate from session context to user profile for persistence. The agent must explicitly trigger this propagation by updating both layers.

When propagating context, preserve the original timestamp and source. The user profile update should note that this preference was discovered in session SES\_X at timestamp Y, maintaining the audit trail.

### **Agent Collaboration and Handoffs**

Multiple agents often need to work together to accomplish complex goals. This requires explicit coordination patterns.

**Handoff Triggers:**

An agent should hand off to another agent when the user's need falls outside this agent's domain, when a task requires expertise this agent does not have, when the user explicitly requests a different agent, or when the current workflow completes and the next logical step involves a different agent.

Handoffs should be explicit and explained to the user. "This next step involves technical implementation, which is outside my expertise as a design specialist. I am going to hand you off to our Technical Implementation Specialist who can guide you through the code development. The specialist will have full context about the design decisions we just made."

**Context Sharing Between Agents:**

When one agent hands off to another, the receiving agent should automatically load relevant context from the session and progress layers. This includes what work was just completed, what decisions were made, what artifacts were produced, and what the next steps are.

The handing-off agent should update session context with a handoff record:

yaml  
handoff\_id: "HND\_20260110200000\_UUID1"  
from\_agent\_id: "design\_specialist"  
to\_agent\_id: "technical\_implementer"  
handoff\_timestamp: "2026-01-10T20:00:00.000Z"  
handoff\_reason: "Design complete, ready for implementation"  
context\_summary: "User has designed a dashboard interface with three main sections. Wireframes and style guide complete. Implementation should follow Material Design 3 patterns."

artifacts\_to\_reference: \["ART\_001", "ART\_002"\]

The receiving agent reads this handoff record and uses it to understand the context without requiring the user to re-explain everything.

**Multi-Agent Workflows:**

Some workflows intentionally involve multiple agents working in sequence. For example, a portfolio building workflow might involve the Design Specialist creating visual layouts, the Writing Specialist crafting compelling narratives, the Technical Implementation Specialist building the website, and the Quality Assurance Specialist reviewing the final product.

These multi-agent workflows are explicitly designed with handoff points where one agent completes their portion and transfers to the next agent. The workflow file specifies which agent handles which steps. This is more sophisticated than ad-hoc handoffs and provides a seamless experience where users do not need to manually activate different agents.

---

## **Workflow Architecture Specification**

Workflows in Shipquick provide disciplined execution of complex multi-step processes. This section explains how workflows are structured, how they enforce discipline, and how they maintain state across sessions.

### **The Step-File Architecture**

The step-file architecture is the core innovation that makes Shipquick workflows different from typical AI task execution. The fundamental principle is that workflows are decomposed into micro-files, with exactly one step per file, and only the current step is loaded into the model's context at any time.

**Why Step-File Architecture Matters:**

AI models have a tendency to be "helpful" by anticipating future steps, skipping parts they think are obvious, or optimizing the process based on their training. While this flexibility can be useful for simple tasks, it is problematic for complex workflows where every step has a specific purpose and skipping steps leads to incomplete or incorrect results.

The step-file architecture solves this problem through forced discipline. By loading only one step at a time, the model cannot look ahead to future steps. This prevents anticipation and ensures the model focuses entirely on the current step. By requiring explicit user confirmation before loading the next step, the architecture prevents skipping and ensures every step is actually completed. By maintaining state in frontmatter that gets updated after each step, the architecture enables resumption and provides audit trails.

**Step File Structure:**

Every step file follows a consistent structure:

markdown  
\---  
step\_id: "step-01-init"  
step\_number: 1  
step\_name: "Initialize Project"  
workflow\_id: "create\_portfolio\_website"  
dependencies: \[\]  
completion\_status: "not\_started"  
\---

\# Step 1: Initialize Project

**\*\*Objective:\*\*** Establish project foundation and gather requirements.

**\*\*Prerequisites:\*\*** None. This is the first step.

\#\# Instructions

**\*\*Part A: Welcome and Context\*\***

\[Detailed instructions for Part A\]

**\*\*Part B: Requirements Gathering\*\***

\[Detailed instructions for Part B\]

**\*\*Part C: Initial Setup\*\***

\[Detailed instructions for Part C\]

\#\# Outputs

By completing this step, you will have created:

\- \[ \] Project requirements document  
\- \[ \] Initial folder structure  
\- \[ \] Configuration file

\#\# Validation

Before proceeding to the next step, verify:

\- \[ \] All requirements are documented with clear acceptance criteria  
\- \[ \] Folder structure matches the template  
\- \[ \] Configuration file contains all required fields

\#\# Next Step

Once you have completed this step and validated all outputs, you are ready to proceed to Step 2: Design Planning.

\---

**\*\*Continue to Step 2?\*\***

\[C\] Continue to next step    
\[R\] Review what I just completed  

\[P\] Pause and save progress

**Step File Components:**

The YAML frontmatter contains metadata about this step including the step\_id which uniquely identifies this step, the step\_number indicating position in sequence, the step\_name which is a human-readable title, the workflow\_id linking this step to its parent workflow, dependencies listing any prerequisite steps, and completion\_status tracking whether this step has been completed.

The main body begins with the step header showing number and name. The objective statement clearly explains what this step achieves. The prerequisites section lists what must be true before this step can be started.

The instructions section contains the actual work to be done. Instructions are typically divided into parts labeled A, B, C to break the step into manageable pieces. Each part has a clear header and detailed instructions. Instructions should be specific and actionable, not vague suggestions.

The outputs section lists tangible artifacts or state changes that result from completing this step. Using a checklist format makes it easy for users to verify they have completed everything.

The validation section provides explicit criteria for determining whether the step was completed correctly. This prevents moving forward with incomplete or incorrect work.

The next step section provides a transition to the following step. It includes a menu with options to continue to the next step, review the current step, or pause and save progress.

**Step Execution Protocol:**

When a step file is loaded, the system reads the entire file before taking any action. This complete reading ensures the model understands the full scope of the step before beginning execution. The model then presents the step to the user, starting with the objective and prerequisites. If prerequisites are not met, the model should indicate this and offer to help complete them or skip to a different step.

The model works through the instructions section sequentially, completing Part A before moving to Part B. Within each part, instructions are followed exactly as written without improvisation or skipping. If the user has questions or gets stuck, the model can provide additional explanation or guidance but should not skip ahead.

After completing instructions, the model reviews the outputs checklist with the user, confirming each item was produced. Then the model reviews the validation criteria, checking each one. Only when all validation criteria are met should the model offer to proceed to the next step.

If the user selects Continue, the model updates the step frontmatter to mark completion\_status as "completed", writes the updated frontmatter back to the step file, loads the next step file in the sequence, and begins executing that step. If the user selects Review, the model summarizes what was accomplished in the current step and offers to continue or make adjustments. If the user selects Pause, the model saves the current state to session context and confirms the workflow can be resumed later.

**Just-In-Time Loading:**

The critical rule of step-file architecture is that steps are loaded just-in-time, meaning exactly when needed and not before. When starting a workflow, only step 1 is loaded. When completing step 1 and the user chooses to continue, step 2 is loaded and step 1 is removed from context. This keeps the model focused on the current step without distraction from past or future steps.

The model must never preload multiple steps or create mental todo lists from future steps it has not yet loaded. This would violate the just-in-time principle and reintroduce the problems step-file architecture is designed to prevent.

### **Workflow File Structure**

Each workflow has a main workflow file that provides metadata and overall structure. This file is separate from the step files.

markdown  
\---  
workflow\_id: "create\_portfolio\_website"  
workflow\_name: "Create Portfolio Website"  
workflow\_description: "Complete workflow for designing and building a professional portfolio website"  
workflow\_category: "portfolio\_building"  
created\_timestamp: "2026-01-10T20:30:00.000Z"  
last\_modified\_timestamp: "2026-01-10T20:30:00.000Z"  
version: 1  
schema\_version: "1.0.0"  
estimated\_duration\_hours: 12  
difficulty\_level: "intermediate"  
prerequisites: \["basic\_html\_css\_knowledge", "design\_tool\_familiarity"\]  
\---

\# Create Portfolio Website Workflow

**\*\*Goal:\*\*** Create a complete professional portfolio website showcasing your work with compelling design and smooth user experience.

**\*\*Your Role:\*\*** You are a web development mentor working with the user to build their portfolio from scratch. Provide expert guidance while ensuring the user understands and owns the work.

\---

\#\# Workflow Architecture

This workflow uses **\*\*step-file architecture\*\*** for disciplined execution:

\#\#\# Core Principles

\- **\*\*Micro-file Design\*\***: Each step is a self-contained instruction file  
\- **\*\*Just-In-Time Loading\*\***: Only the current step is in memory  
\- **\*\*Sequential Enforcement\*\***: Steps must be completed in order  
\- **\*\*State Tracking\*\***: Progress is documented in frontmatter  
\- **\*\*Append-Only Building\*\***: Documents grow incrementally

\#\#\# Step Processing Rules

1\. **\*\*READ COMPLETELY\*\***: Always read the entire step file before taking action  
2\. **\*\*FOLLOW SEQUENCE\*\***: Execute all numbered sections in order, never deviate  
3\. **\*\*WAIT FOR INPUT\*\***: If a menu is presented, halt and wait for user selection  
4\. **\*\*CHECK CONTINUATION\*\***: Only proceed to next step when user selects Continue  
5\. **\*\*SAVE STATE\*\***: Update frontmatter before loading next step  
6\. **\*\*LOAD NEXT\*\***: When directed, load and read the next step file completely

\#\#\# Critical Rules (NO EXCEPTIONS)

\- 🛑 **\*\*NEVER\*\*** load multiple step files simultaneously  
\- 📖 **\*\*ALWAYS\*\*** read entire step file before execution  
\- 🚫 **\*\*NEVER\*\*** skip steps or optimize the sequence  
\- 💾 **\*\*ALWAYS\*\*** update frontmatter of output files  
\- 🎯 **\*\*ALWAYS\*\*** follow exact instructions in the step file  
\- ⏸️ **\*\*ALWAYS\*\*** halt at menus and wait for user input

\---

\#\# Workflow Steps

This workflow consists of 8 steps:

1\. **\*\*Initialize Project\*\*** (step-01-init.md) \- 1.5 hours  
   \- Gather requirements and setup project structure  
     
2\. **\*\*Design Planning\*\*** (step-02-design.md) \- 2 hours  
   \- Create wireframes and design system  
     
3\. **\*\*Content Development\*\*** (step-03-content.md) \- 2 hours  
   \- Write copy and gather portfolio pieces  
     
4\. **\*\*Implementation\*\*** (step-04-implement.md) \- 3 hours  
   \- Build HTML/CSS structure  
     
5\. **\*\*Interactivity\*\*** (step-05-interactivity.md) \- 1.5 hours  
   \- Add JavaScript for enhanced UX  
     
6\. **\*\*Responsiveness\*\*** (step-06-responsive.md) \- 1 hour  
   \- Ensure mobile and tablet compatibility  
     
7\. **\*\*Polish\*\*** (step-07-polish.md) \- 1 hour  
   \- Refine details and performance  
     
8\. **\*\*Launch\*\*** (step-08-launch.md) \- 30 minutes  
   \- Deploy and share portfolio

\---

\#\# Initialization Sequence

\#\#\# 1\. Configuration Loading

Load configuration from {main\_config}:

\- \`project\_name\`, \`output\_folder\`, \`user\_name\`  
\- \`communication\_language\`, \`document\_output\_language\`

\#\#\# 2\. Context Loading

Load relevant context:

\- User profile: design preferences, technical skill level  
\- Goal: career objectives, target audience  
\- Progress: existing portfolio pieces, completed steps

\#\#\# 3\. First Step Execution

Load, read completely, and execute \`steps/step-01-init.md\`

**Workflow File Components:**

The YAML frontmatter provides metadata about the workflow including unique identifier, name, description, category for organization, timestamps, version, estimated duration, difficulty level, and prerequisites.

The goal statement clearly explains what the workflow accomplishes. The role statement defines what persona the agent should embody during workflow execution.

The workflow architecture section explains the step-file methodology, core principles, step processing rules, and critical rules. This section ensures whoever executes the workflow understands the discipline required.

The workflow steps section lists all steps in order with filenames and estimated durations. This provides an overview of the journey without loading the actual step files yet.

The initialization sequence explains what happens before the first step executes, including what configuration and context needs to be loaded.

### **Workflow State Management**

Workflows maintain state to enable resumption and progress tracking.

**Workflow State Document:**

yaml  
workflow\_state\_id: "WFS\_20260110203000\_UUID1"  
workflow\_id: "create\_portfolio\_website"  
user\_profile\_id: "USR\_20260101120000\_UUID1"  
session\_id: "SES\_20260110203000\_UUID2"  
started\_timestamp: "2026-01-10T20:30:00.000Z"  
last\_active\_timestamp: "2026-01-10T21:45:00.000Z"  
workflow\_status: "in\_progress"

steps\_completed:  
  \- step\_id: "step-01-init"  
    completed\_timestamp: "2026-01-10T20:45:00.000Z"  
    completion\_confirmed\_by\_user: true  
    outputs\_produced: \["project\_requirements.md", "folder\_structure"\]  
      
  \- step\_id: "step-02-design"  
    completed\_timestamp: "2026-01-10T21:30:00.000Z"  
    completion\_confirmed\_by\_user: true  
    outputs\_produced: \["wireframes.fig", "design\_system.md"\]

current\_step:  
  step\_id: "step-03-content"  
  started\_timestamp: "2026-01-10T21:35:00.000Z"  
  progress\_notes: "User has written about section and portfolio intro. Working on project descriptions."

workflow\_context:  
  *\# Workflow-specific data that accumulates*  
  chosen\_color\_palette: \["\#1a2a3a", "\#ff6b35", "\#f7f7f7"\]  
  target\_audience: "hiring managers at tech companies"  
  preferred\_layout: "grid-based with large imagery"

  portfolio\_pieces\_to\_feature: 5

This state document is updated after each step completes. It provides a complete record of progress and enables seamless resumption if the workflow is paused.

**Resuming Workflows:**

When resuming a paused workflow, the system loads the workflow state document, identifies the current step, loads that step file, and presents a summary of what was accomplished in previous steps before continuing with the current step.

The resume process looks like:

1. User indicates they want to resume the portfolio website workflow  
2. System loads workflow\_state document for that workflow  
3. System sees current\_step is step-03-content  
4. System loads step-03-content.md  
5. System presents: "Welcome back\! You have completed project initialization and design planning. Your wireframes are complete and design system is defined. You were working on content development, specifically writing project descriptions. Let's continue from there."  
6. System picks up at the exact point where the user left off

This seamless resumption is only possible because state is meticulously tracked.

### **Workflow Branching and Conditionals**

Some workflows need to branch based on user choices or context. This is handled through conditional step loading.

**Branching Pattern:**

markdown  
\#\# Next Step

Based on your choice, we will proceed differently:

**\*\*If you chose Simple Layout:\*\***  
Continue to step-04a-simple-implementation.md

**\*\*If you chose Complex Layout:\*\***  
Continue to step-04b-complex-implementation.md

**\*\*What layout approach did you choose?\*\***

\[S\] Simple \- faster to implement, clean design

\[C\] Complex \- more features, longer development

The step file presents the choice and based on user input, loads the appropriate next step. The workflow state document records which branch was taken, preserving the decision for the audit trail.

**Context-Based Branching:**

Some branches are determined by context rather than user choice:

markdown  
\#\# Next Step Determination

Checking your skill level in CSS...

\[Context query: user\_profile.skill\_levels where skill\_name="CSS"\]

\- If proficiency\_level \>= 7: Load step-05-advanced-styling.md  
\- If proficiency\_level \< 7: Load step-05-guided-styling.md

Your CSS skill level is 5, so we will use the guided styling approach that provides more explanation and examples.

Proceeding to step-05-guided-styling.md

This enables workflows to adapt to user capabilities without requiring explicit choices at every branch point.

---

## **Master Orchestrator Design**

The master orchestrator is the brain of every Shipquick-generated system. It coordinates all agents, maintains awareness of the overall goal and progress, routes user requests intelligently, and provides meta-level guidance about what to focus on next.

### **Orchestrator Responsibilities**

The orchestrator has several key responsibilities that distinguish it from specialist agents.

**Capability Awareness:**

The orchestrator maintains comprehensive knowledge of all available agents, workflows, and capabilities in the system. It does this by reading manifest files that list all components. When a user makes a request, the orchestrator knows which agent or workflow can handle it and routes appropriately.

**Contextual Routing:**

The orchestrator does not just route based on keywords. It considers the full context including the user's current goal, their progress toward that goal, what they were just working on, what logical next steps would be, and what capabilities they have available. This contextual routing means the orchestrator can provide intelligent suggestions rather than just presenting a static menu.

**Progress Monitoring:**

The orchestrator maintains awareness of the user's progress across all workstreams. It knows which milestones have been completed, which are in progress, and which have not been started. It identifies blockers that are preventing progress and can suggest ways to unblock. It recognizes when the user is making strong progress versus when they are stuck or drifting.

**Proactive Suggestion:**

Unlike specialist agents that wait for the user to select from their menu, the orchestrator proactively suggests what the user should work on next based on progress analysis. For example, if the user has completed three out of five planned deliverables and has not worked on the remaining two in a week, the orchestrator might suggest "You have made great progress on deliverables A, B, and C. Deliverables D and E are still pending. Would you like to work on one of those today?"

**Multi-Agent Coordination:**

When a task requires multiple specialists working together, the orchestrator coordinates the collaboration. It might activate multiple agents in sequence, each handling their portion, with smooth handoffs between them. Or it might facilitate a "party mode" discussion where multiple agents are present simultaneously to provide different perspectives.

**Learning and Adaptation:**

The orchestrator learns from how the user works. It notices patterns like which times of day the user is most productive, which types of tasks the user tends to procrastinate on, which specialists the user works with most effectively, and which workflows the user completes quickly versus which ones take longer than expected. The orchestrator uses this learning to provide increasingly relevant suggestions.

### **Orchestrator Activation**

When the user first interacts with a Shipquick system, the orchestrator activates automatically. The activation sequence is similar to specialist agents but with additional steps for loading the system-wide context.

**Orchestrator Activation Sequence:**

Step One loads the orchestrator persona which is typically characterized as a chief of staff, executive assistant, or project coordinator who understands the big picture and helps the user stay focused on their goal.

Step Two loads system configuration including all user preferences and system-wide settings.

Step Three loads the complete manifest of available agents and workflows. This gives the orchestrator full awareness of all capabilities.

Step Four loads the user's profile including background, skills, preferences, and behavioral patterns.

Step Five loads the user's current goal including objective, constraints, strategy, and milestones.

Step Six loads progress data including completed deliverables, in-progress work, skill progression, and behavioral patterns.

Step Seven analyzes the current situation by comparing progress to plan, identifying what is on track versus behind schedule, detecting blockers or challenges, and recognizing opportunities for progress.

Step Eight presents a personalized greeting that acknowledges the user's goal, summarizes current status, highlights recent accomplishments, and suggests next actions based on the analysis.

Step Nine presents the orchestrator menu which includes options to activate specific specialists, execute common workflows, review progress, adjust goals or plans, and access system utilities.

**Orchestrator Context Depth:**

The orchestrator loads more comprehensive context than specialist agents because it needs to understand the full landscape of the user's journey. Specialist agents load only context relevant to their domain, while the orchestrator loads context across all domains to enable intelligent routing and coordination.

### **Intelligent Routing Logic**

The orchestrator's routing logic is more sophisticated than simple keyword matching. It uses context to determine the best agent or workflow for the user's current need.

**Routing Decision Process:**

When the user makes a request, the orchestrator follows this decision process:

First, parse the user's request to extract intent, domain, urgency level, and context references.

Second, check for explicit agent or workflow mentions. If the user says "I want to work with the writing coach" or "start the portfolio workflow", honor that explicit choice and route accordingly.

Third, if no explicit choice, analyze the request content to identify which domain it falls into. For example, "I need to improve my resume" maps to career development domain. "Help me structure this essay" maps to writing domain. "How do I implement this algorithm" maps to technical implementation domain.

Fourth, query progress context to understand where the user is in their journey. Have they completed prerequisites for certain workflows? Are they already in the middle of a multi-step process that should be continued? Are there logical next steps based on what they just finished?

Fifth, check capability availability. Are all required agents and workflows available in the current system? Are there multiple options that could handle this request?

Sixth, evaluate routing options based on quality of fit, user preferences and history, current progress state, and logical workflow sequencing.

Seventh, make routing decision and explain the reasoning to the user. For example: "You are asking about implementing your portfolio design. Our Technical Implementation Specialist can guide you through the code development. I will activate that specialist now. The specialist will have full context about your design decisions so you will not need to re-explain."

Eighth, execute the routing by activating the selected agent or workflow with appropriate context pre-loaded.

**Routing Patterns:**

Simple direct routing: User request clearly maps to one specialist. Route there immediately.

Sequential routing: User request requires multiple specialists in sequence. Route to first, which automatically hands off to second when done.

Parallel routing: User request could be handled by multiple specialists simultaneously. Ask user which approach they prefer or route to the most commonly successful option.

Deferred routing: User request cannot be handled yet because prerequisites are missing. Inform user and offer to help complete prerequisites first.

### **Proactive Suggestion Generation**

One of the orchestrator's most valuable capabilities is proactively suggesting what the user should work on next rather than waiting for the user to decide.

**Suggestion Trigger Patterns:**

The orchestrator generates suggestions based on several patterns:

Pattern One: Incomplete sequences. If the user has completed steps 1, 2, and 3 of a workflow but not step 4, suggest continuing the workflow.

Pattern Two: Pending deliverables. If the goal includes creating five portfolio pieces and only three are done, suggest working on the remaining two.

Pattern Three: Approaching deadlines. If a milestone has a target date coming up soon and progress is behind schedule, suggest focusing on activities that advance that milestone.

Pattern Four: Identified gaps. If progress analysis reveals skill gaps or missing prerequisites, suggest activities that address those gaps.

Pattern Five: Stale work. If something has been in-progress for a long time without updates, suggest either completing it or pausing it to focus on other priorities.

Pattern Six: Optimal timing. If behavioral patterns show the user is most productive at certain times, suggest specific activities during those times.

Pattern Seven: Momentum opportunities. If the user just completed something successfully, suggest related activities while momentum is high.

**Suggestion Quality Criteria:**

Good proactive suggestions meet these criteria:

Specific: "Work on your portfolio website" is vague. "Complete the responsive design step of your portfolio workflow" is specific.

Actionable: The user should be able to immediately act on the suggestion without needing to figure out what to do first.

Contextual: The suggestion should make sense given where the user is in their journey and what they have available time and energy for.

Timely: The suggestion should be relevant to the current moment, not something that would have been relevant last week or will be relevant next month.

Reasoned: The suggestion should come with brief explanation of why it is being suggested, helping the user understand the recommendation.

**Suggestion Presentation:**

Suggestions are presented as options, not commands. The orchestrator should frame suggestions as "Based on your progress, you might want to consider \[suggestion\]. Does that sound good or would you prefer to work on something else?" This preserves user agency while providing helpful guidance.

### **Orchestrator Menus**

The orchestrator presents two types of menus: a standard menu with common capabilities and a contextual menu with suggestions based on current state.

**Standard Orchestrator Menu:**

Welcome back\! You are working toward \[goal\]. Here is your current status:

✅ Completed: \[milestone1\], \[milestone2\]  
🔄 In Progress: \[milestone3\] (60% complete)  
⏳ Upcoming: \[milestone4\], \[milestone5\]

What would you like to work on?

\[1\] Continue current work: \[specific in-progress item\]  
\[2\] Start next priority: \[specific pending item\]  
\[3\] Review progress and adjust plans  
\[4\] Activate a specialist agent  
\[5\] Execute a workflow  
\[6\] Explore learning resources  
\[7\] Adjust goals or timelines

\[8\] System utilities and settings

This menu is presented when the user starts a session or requests guidance on what to do next.

**Contextual Suggestion Menu:**

I notice you have not worked on \[specific item\] in 5 days. This is on your critical path for reaching \[milestone\] by \[date\].

Suggested focus for today:

\[A\] Continue \[in-progress item\] \- 30 minutes estimated, high priority  
\[B\] Start \[pending item\] \- 1 hour estimated, unblocks future work  
\[C\] Review and polish \[completed item\] \- 15 minutes, quick win

Or choose a different focus:

\[D\] Show full menu of options

\[E\] Let me decide what I want to work on

This menu is presented when the orchestrator has high-confidence suggestions based on progress analysis. It offers specific recommendations while still allowing the user to make their own choice.

---

## **Module Structure and Organization**

Shipquick systems are organized into logical modules that provide clear separation of concerns while enabling coordination across modules. This section explains how modules are structured and how they work together.

### **Module Hierarchy**

Every Shipquick system has a hierarchical module structure with a core module at the foundation and specialized modules building on top.

**Core Module:**

The core module is always present and provides fundamental infrastructure that all other modules depend on. The core module contains the master orchestrator agent, the context management engine, the workflow execution engine, configuration management system, data persistence layer, and manifest management system.

The core module lives in a directory called `sq_core` and has this structure:

sq\_core/  
├── agents/  
│   └── orchestrator.md  
├── context/  
│   ├── context\_engine.py  
│   └── schemas/  
│       ├── user\_profile.schema.yaml  
│       ├── goal.schema.yaml  
│       ├── progress.schema.yaml  
│       ├── session.schema.yaml  
│       ├── knowledge\_graph.schema.yaml  
│       └── interaction\_history.schema.yaml  
├── workflows/  
│   ├── workflow\_executor.py  
│   └── common/  
│       ├── goal\_definition.workflow/  
│       └── progress\_review.workflow/  
├── config/  
│   ├── system.config.yaml  
│   └── user.config.yaml  
├── manifests/  
│   ├── agents.manifest.csv  
│   ├── workflows.manifest.csv  
│   └── modules.manifest.csv  
└── docs/

    └── core\_architecture.md

**Specialized Modules:**

Specialized modules add domain-specific capabilities. Each module has a clear focus and provides agents and workflows for that domain. Module names should be descriptive and use lowercase with underscores.

Example specialized modules:

* `writing_skills` \- Agents and workflows for improving writing  
* `technical_implementation` \- Agents and workflows for code development  
* `career_development` \- Agents and workflows for job search and career growth  
* `creative_projects` \- Agents and workflows for creative work  
* `learning_systems` \- Agents and workflows for skill acquisition

Each specialized module has this structure:

module\_name/  
├── module.yaml          \# Module metadata  
├── agents/             \# Module-specific agents  
│   ├── specialist1.md  
│   └── specialist2.md  
├── workflows/          \# Module-specific workflows  
│   ├── workflow1/  
│   │   ├── workflow.md  
│   │   └── steps/  
│   └── workflow2/  
├── data/              \# Module-specific data  
│   ├── templates/  
│   └── references/  
├── config/            \# Module-specific configuration  
│   └── module.config.yaml  
└── docs/              \# Module documentation

    └── README.md

**Module Metadata:**

Each module includes a module.yaml file that describes the module:

yaml  
module\_id: "writing\_skills"  
module\_name: "Writing Skills Development"  
module\_version: "1.0.0"  
module\_description: "Comprehensive writing improvement through coaching and structured practice"  
module\_category: "skill\_development"  
created\_timestamp: "2026-01-10T21:00:00.000Z"  
last\_modified\_timestamp: "2026-01-10T21:00:00.000Z"  
dependencies:  
  \- module\_id: "sq\_core"  
    minimum\_version: "1.0.0"  
provides:  
  agents:  
    \- agent\_id: "writing\_coach"  
      agent\_name: "Writing Coach"  
    \- agent\_id: "editor"  
      agent\_name: "Editorial Specialist"  
  workflows:  
    \- workflow\_id: "essay\_development"  
      workflow\_name: "Develop Compelling Essay"  
    \- workflow\_id: "style\_improvement"

      workflow\_name: "Improve Writing Style"

This metadata enables the core system to discover module capabilities and validate dependencies.

### **Module Registration**

When a module is added to a Shipquick system, it must be registered so the core system knows about it.

**Registration Process:**

First, place the module directory in the system's modules folder.

Second, add an entry to the modules manifest at `sq_core/manifests/modules.manifest.csv`:

csv  
module\_id,module\_name,module\_version,module\_path,enabled,registration\_timestamp

"writing\_skills","Writing Skills Development","1.0.0","modules/writing\_skills",true,"2026-01-10T21:00:00.000Z"

Third, add entries to the agents manifest for each agent the module provides:

csv  
agent\_id,agent\_name,agent\_title,module\_id,agent\_path

"writing\_coach","Writing Coach","Expert Writing Coach and Style Guide","writing\_skills","modules/writing\_skills/agents/writing\_coach.md"

Fourth, add entries to the workflows manifest for each workflow the module provides:

csv  
workflow\_id,workflow\_name,workflow\_category,module\_id,workflow\_path

"essay\_development","Develop Compelling Essay","writing","writing\_skills","modules/writing\_skills/workflows/essay\_development/workflow.md"

Fifth, restart the system or reload manifests so the core system recognizes the new module.

**Module Discovery:**

When the orchestrator activates, it reads all manifest files and builds an internal registry of available capabilities. This registry includes all agents from all modules, all workflows from all modules, and metadata about each module.

When the user requests a capability, the orchestrator searches this registry to find matching options regardless of which module provides them. This means users do not need to know which module contains what they need \- they just describe what they want and the orchestrator finds it.

### **Cross-Module Communication**

Modules can reference capabilities from other modules, enabling rich interactions.

**Module Dependencies:**

If a module needs capabilities from another module, it declares this in its module.yaml dependencies section. The system validates that required modules are present and at sufficient versions before allowing the dependent module to activate.

**Agent Handoffs Across Modules:**

An agent in one module can hand off to an agent in another module. The handoff process is the same as intra-module handoffs: update session context with handoff record, specify what the next agent should know, and load the next agent with appropriate context.

**Workflow Inclusion:**

A workflow in one module can invoke a workflow from another module as a sub-workflow. For example, a career development workflow for "Build Professional Portfolio" might invoke the "Create Portfolio Website" workflow from the technical implementation module.

This is done by including a step in the parent workflow that explicitly loads and executes the child workflow:

markdown  
\#\# Step 5: Build Portfolio Website

You have gathered your portfolio content. Now it is time to build the website that showcases it.

We will use the "Create Portfolio Website" workflow from the Technical Implementation module.

**\*\*Executing sub-workflow:\*\*** \`modules/technical\_implementation/workflows/create\_portfolio\_website/workflow.md\`

\[The workflow executor loads and runs this workflow, then returns here when complete\]

Portfolio website workflow completed. Your website is now live at \[URL\].

Proceed to Step 6: Promote Your Portfolio

This sub-workflow execution is seamless to the user \- it just feels like one continuous workflow.

---

## **The Meta-System: How Shipquick Generates Systems**

This section explains how Shipquick functions as a meta-system that can analyze a business goal and generate a complete customized agentic system tailored to achieving that goal.

### **Meta-System Capabilities**

The Shipquick meta-system has several sophisticated capabilities that enable it to generate high-quality systems.

**Goal Analysis and Decomposition:**

When given a business goal like "Become a data scientist within six months", the meta-system performs deep analysis to understand what this truly requires. It identifies major capability domains needed for the goal, specific competencies required within each domain, sub-goals and milestones that mark progress, dependencies where certain capabilities must be developed before others, and potential challenges and common pitfalls.

The output of goal analysis is a structured breakdown showing the complete landscape of what must be accomplished.

**Role Architecture Design:**

Based on the goal decomposition, the meta-system designs an appropriate team of specialist agents. It determines how many agents are needed, what each agent should specialize in, how responsibilities should be divided to avoid overlap, what collaboration patterns the agents will need, and what common infrastructure all agents will share.

The role architecture balances specialization with practicality. Too few agents mean each has to cover too broad a domain and loses depth. Too many agents create coordination overhead. The meta-system aims for the right number of hyper-specialized agents.

**Persona Generation:**

For each agent role, the meta-system generates a complete persona including role definition, identity narrative with relevant background, communication style appropriate for the domain, and principles that guide the agent's decisions. These personas are not generic but tailored to the specific goal and user context.

**Workflow Decomposition:**

The meta-system identifies what workflows are needed to accomplish the goal. It breaks complex processes into step-by-step workflows, determines appropriate granularity for steps, designs branching and conditionals where choices must be made, specifies what artifacts each workflow produces, and estimates duration for planning purposes.

**Context Schema Customization:**

While Shipquick has standard context layers, the meta-system customizes these schemas for the specific goal. It determines what additional fields are needed in each layer, what domain-specific context is required, how progress should be measured for this particular goal, and what relationships in the knowledge graph matter most.

**Quality Standards Definition:**

The meta-system establishes what constitutes good work for this domain. It defines quality criteria for each deliverable type, scoring rubrics for assessments, validation rules for workflow completion, and benchmarks for skill proficiency.

**Template Generation:**

The meta-system generates all the actual files needed for the system to function including agent markdown files with complete personas and menus, workflow files with step sequences, step files with detailed instructions, configuration files with appropriate defaults, and manifest files registering all components.

### **Meta-System Workflow**

When a user wants to create a new Shipquick system for their goal, they go through a guided workflow that captures requirements and generates the system.

**Phase 1: Goal Definition**

The meta-system begins with an in-depth conversation to understand the goal.

Questions the meta-system asks:

* What exactly are you trying to achieve?  
* What does success look like concretely?  
* What is your timeline?  
* What constraints do you have?  
* What experience or skills do you already have?  
* What is your motivation for this goal?  
* How will you know when you have achieved it?

The meta-system does not accept vague goals. It probes until the goal is specific and measurable.

Example vague goal: "Get better at writing" Example specific goal: "Improve my technical writing skills to the point where I can publish three high-quality blog posts per month explaining complex software concepts to non-technical audiences, starting within two months"

**Phase 2: Capability Analysis**

Once the goal is clear, the meta-system analyzes what capabilities are required.

Analysis questions the meta-system asks itself:

* What major domains does this goal span?  
* What specific skills must be developed?  
* What knowledge must be acquired?  
* What artifacts must be produced?  
* What decisions must be made along the way?  
* What challenges are likely to arise?

The output is a capability map showing domains, competencies, artifacts, and dependencies.

**Phase 3: Agent Team Design**

The meta-system designs the agent team based on capability analysis.

Design decisions:

* How many agents are needed to cover all domains with appropriate depth?  
* What should each agent specialize in to maximize expertise without overlap?  
* What personas will make each agent effective and memorable?  
* How will agents collaborate and hand off work?

The meta-system generates agent specifications including role, identity, communication style, principles, and menu items.

**Phase 4: Workflow Design**

The meta-system identifies key workflows that guide the user through structured processes.

Workflow identification:

* What complex multi-step processes will the user need to complete?  
* What is the natural sequence for these processes?  
* Where do users typically struggle or skip steps?  
* What discipline is needed to ensure quality outcomes?

For each identified workflow, the meta-system designs the step sequence, determines branching points, specifies outputs and validation criteria, and estimates duration.

**Phase 5: Context Schema Design**

The meta-system customizes context schemas for this specific goal.

Schema customization:

* What fields should be added to user profile for this domain?  
* How should progress be measured and tracked?  
* What artifacts are important enough to track individually?  
* What knowledge graph relationships are most relevant?

The meta-system generates schema documents for each context layer with domain-specific extensions.

**Phase 6: Code and File Generation**

The meta-system generates all files needed for the complete system.

Generated artifacts:

* Agent markdown files for each specialist and the orchestrator  
* Workflow markdown files for each identified workflow  
* Step markdown files for all workflow steps  
* Configuration YAML files with appropriate defaults  
* Manifest CSV files registering all components  
* Schema YAML files defining context structures  
* Documentation markdown files explaining the system

**Phase 7: Validation and Testing**

The meta-system validates that the generated system is complete and coherent.

Validation checks:

* All referenced files exist and are properly formatted  
* All agents have required sections and valid personas  
* All workflows have complete step sequences  
* All manifests include all components  
* All cross-references resolve correctly  
* All schemas are consistent and complete

If validation fails, the meta-system repairs issues and re-validates until the system passes all checks.

**Phase 8: Delivery and Documentation**

The meta-system packages the complete system and provides instructions for use.

Deliverables:

* Complete directory structure with all files  
* Installation and setup instructions  
* User guide explaining how to use the system  
* Agent and workflow catalog  
* Customization guide for future modifications

The user receives everything they need to immediately start using their customized Shipquick system.

### **Meta-System Example**

To make this concrete, let's walk through an example of the meta-system generating a system for a generic goal.

**Example Goal:** "Learn advanced machine learning and become proficient in building and deploying ML models"

**Phase 1 Output \- Refined Goal:**

After questioning, the meta-system refines this to: "Develop practical machine learning engineering skills sufficient to independently design, implement, train, evaluate, and deploy production ML models for classification and regression tasks using Python, scikit-learn, TensorFlow, and cloud ML platforms. Demonstrate competency through completing five progressively complex ML projects over four months, culminating in a deployed production model serving live predictions."

**Phase 2 Output \- Capability Analysis:**

Major domains:

* ML Theory and Mathematics  
* Python Programming for ML  
* Data Preprocessing and Feature Engineering  
* Model Selection and Training  
* Model Evaluation and Tuning  
* ML System Architecture  
* Deployment and MLOps

Specific competencies by domain:

* ML Theory: Supervised learning algorithms, optimization methods, regularization, evaluation metrics  
* Python: NumPy, Pandas, scikit-learn API, TensorFlow basics  
* Data: Data cleaning, handling missing data, feature scaling, encoding categorical variables  
* Training: Train/test splitting, cross-validation, hyperparameter tuning, handling overfitting  
* Evaluation: Confusion matrices, ROC curves, precision-recall tradeoffs, business metric alignment  
* Architecture: Pipeline design, model versioning, experiment tracking  
* Deployment: Model serialization, REST API development, container deployment, monitoring

Required artifacts:

* Five complete ML projects with increasing complexity  
* Technical documentation for each project  
* Model performance reports  
* Deployment documentation

**Phase 3 Output \- Agent Team Design:**

Agents to create:

1. **ML Theory Coach** \- Explains mathematical concepts and algorithmic principles  
   * Role: Patient teacher who builds deep understanding of ML foundations  
   * Communication: Uses analogies and visual explanations, encourages questions  
2. **Python Code Mentor** \- Guides implementation and code quality  
   * Role: Experienced engineer who emphasizes best practices and clean code  
   * Communication: Direct and precise, focused on correctness and efficiency  
3. **Data Scientist** \- Specializes in data analysis and feature engineering  
   * Role: Analytical expert who finds patterns and builds intuitive features  
   * Communication: Thinks out loud, shares hypothesis and reasoning process  
4. **Model Architect** \- Designs ML systems and model selection  
   * Role: Strategic thinker who considers trade-offs and scalability  
   * Communication: Asks probing questions about requirements and constraints  
5. **MLOps Engineer** \- Handles deployment, monitoring, and production concerns  
   * Role: Pragmatic engineer who ensures models work reliably at scale  
   * Communication: Focused on operational concerns and failure modes  
6. **Project Coordinator** (Orchestrator) \- Maintains big picture and guides journey  
   * Role: Experienced ML tech lead who understands the full lifecycle  
   * Communication: Encouraging but realistic, keeps focus on learning goals

**Phase 4 Output \- Workflow Design:**

Key workflows:

1. **ML Project Setup** (6 steps, 2 hours)  
   * Define problem and success metrics  
   * Gather and explore dataset  
   * Establish baseline  
   * Design project structure  
   * Set up experiment tracking  
   * Document initial hypotheses  
2. **Model Development Cycle** (8 steps, 6 hours)  
   * Data preprocessing  
   * Feature engineering  
   * Model selection and training  
   * Evaluation and error analysis  
   * Hyperparameter tuning  
   * Final model selection  
   * Documentation  
   * Handoff to deployment  
3. **Production Deployment** (7 steps, 4 hours)  
   * Model serialization  
   * API development  
   * Containerization  
   * Cloud deployment  
   * Integration testing  
   * Monitoring setup  
   * Documentation

**Phase 5 Output \- Context Schema Customization:**

Additions to user profile:

yaml  
ml\_specific\_skills:  
  \- skill\_name: "linear\_regression"  
    proficiency\_level: 1-10  
  \- skill\_name: "decision\_trees"  
    proficiency\_level: 1-10  
  *\# ... additional ML skills*

ml\_project\_experience:  
  \- project\_id: "reference"  
    project\_type: "classification|regression|clustering"  
    complexity\_level: 1-5

    completion\_date: "date"

Additions to progress layer:

yaml  
ml\_projects\_completed:  
  \- project\_id: "PRJ\_UUID"  
    project\_type: "string"  
    dataset\_description: "string"  
    model\_type: "string"  
    performance\_metrics:  
      \- metric\_name: "string"  
        metric\_value: float  
    deployment\_status: "not\_deployed|deployed|production"

    project\_url: "string"

**Phase 6 Output \- Generated Files:**

The meta-system generates approximately 75 files:

* 6 agent markdown files  
* 3 workflow markdown files  
* 21 step markdown files (6 \+ 8 \+ 7\)  
* Configuration files  
* Schema files  
* Manifest files  
* Documentation

Each file is complete and ready to use.

**Phase 7 Output \- Validation:**

The meta-system validates:

* All agent files have valid XML structure  
* All workflows reference existing step files  
* All step files follow naming convention  
* All manifests include all agents and workflows  
* All cross-references resolve  
* All schemas are valid YAML

Validation passes with zero errors.

**Phase 8 Output \- Delivery:**

The user receives:

ml\_learning\_system/  
├── sq\_core/  
│   └── \[core files\]  
├── ml\_learning/  
│   ├── agents/  
│   │   ├── ml\_theory\_coach.md  
│   │   ├── python\_code\_mentor.md  
│   │   ├── data\_scientist.md  
│   │   ├── model\_architect.md  
│   │   └── mlops\_engineer.md  
│   ├── workflows/  
│   │   ├── ml\_project\_setup/  
│   │   ├── model\_development\_cycle/  
│   │   └── production\_deployment/  
│   └── docs/  
│       └── README.md  
├── config/  
│   └── user.config.yaml

└── INSTALL.md

Along with complete setup instructions and a user guide.

The user can now immediately start using this system to learn machine learning with guidance from the specialist agents and structured workflows.

---

## **Configuration and Customization Patterns**

Shipquick systems are highly configurable, allowing users to customize behavior without modifying code. This section explains configuration patterns and customization options.

### **Configuration File Hierarchy**

Shipquick uses a hierarchical configuration system with multiple levels of configuration that can override each other.

**System Configuration:**

System configuration contains defaults that apply to all users and all sessions. Located at `sq_core/config/system.config.yaml`:

yaml  
system\_config\_id: "system"  
system\_version: "1.0.0"

defaults:  
  communication\_language: "english"  
  document\_output\_language: "english"  
  output\_folder: "outputs"  
  timezone: "UTC"  
  date\_format: "YYYY-MM-DD"  
  time\_format: "HH:mm:ss"  
    
agent\_defaults:  
  activation\_greeting: true  
  menu\_display\_style: "numbered"  
  command\_trigger\_prefix: "\*"  
    
workflow\_defaults:  
  save\_state\_after\_each\_step: true  
  allow\_step\_skipping: false  
  validate\_prerequisites: true  
    
context\_defaults:  
  auto\_save\_interval\_minutes: 5  
  context\_compression\_enabled: true

  history\_retention\_days: 365

**User Configuration:**

User configuration contains preferences specific to one user. Located at `config/user.config.yaml`:

yaml  
user\_config\_id: "USR\_20260101120000\_UUID1"  
created\_timestamp: "2026-01-01T12:00:00.000Z"  
last\_modified\_timestamp: "2026-01-10T22:00:00.000Z"  
version: 3

user\_identity:  
  preferred\_name: "Alex"  
  full\_name: "Alex Johnson"  
  email: "alex@example.com"  
  timezone: "America/New\_York"

preferences:  
  communication\_language: "english"  
  document\_output\_language: "english"  
  output\_folder: "/home/alex/shipquick\_outputs"  
    
  interface:  
    menu\_display\_style: "numbered"  
    show\_agent\_icons: true  
    show\_estimated\_durations: true  
    show\_completion\_checkboxes: true  
    
  notifications:  
    enable\_milestone\_notifications: true  
    enable\_deadline\_reminders: true  
    reminder\_days\_before\_deadline: 3  
    
  workflow:  
    auto\_continue\_on\_validation\_pass: false  
    pause\_for\_review\_after\_each\_step: false

    show\_progress\_bar: true

**Session Configuration:**

Session configuration contains temporary settings for the current session. Stored in session context:

yaml  
session\_config:  
  session\_focus\_mode: false  
  session\_skip\_greetings: false  
  session\_verbosity: "detailed"

  session\_working\_on\_specific\_project: "portfolio\_website"

**Configuration Override Order:**

When a configuration value is needed, the system checks in this order:

1. Session configuration (highest priority)  
2. User configuration  
3. Module configuration (if applicable)  
4. System configuration (lowest priority)

The first place the value is found is the value that is used. This allows temporary session settings to override user preferences which override system defaults.

### **Customization Through Configuration**

Many aspects of Shipquick behavior can be customized through configuration rather than code changes.

**Agent Behavior Customization:**

yaml  
agent\_customizations:  
  ml\_theory\_coach:  
    explanation\_depth: "comprehensive"  *\# "brief" | "moderate" | "comprehensive"*  
    use\_mathematical\_notation: true  
    use\_code\_examples: true  
    use\_visual\_analogies: true

    formality\_level: "professional"  *\# "casual" | "professional" | "academic"*

This customization affects how the ML Theory Coach agent explains concepts without changing the agent's core persona.

**Workflow Behavior Customization:**

yaml  
workflow\_customizations:  
  model\_development\_cycle:  
    skip\_steps: \[\]  *\# List of step IDs to skip*  
    auto\_continue\_on: \[\]  *\# Step IDs where auto-continue is allowed*  
    require\_explicit\_validation\_on: \["step-04-evaluation"\]  
    time\_limits:  
      step-01-preprocessing: 60  *\# minutes*

      step-02-feature-engineering: 90

This allows adapting workflows to the user's preferences and skill level.

**Context Behavior Customization:**

yaml  
context\_customizations:  
  auto\_propagate\_observations: true  
  skill\_assessment\_frequency: "weekly"  *\# "per\_use" | "daily" | "weekly" | "monthly"*  
  interaction\_history\_detail\_level: "moderate"  *\# "minimal" | "moderate" | "comprehensive"*

  knowledge\_graph\_edge\_creation: "automatic"  *\# "automatic" | "manual" | "hybrid"*

This controls how aggressively the system builds and maintains context.

---

## **Quality Standards and Feedback Loops**

Shipquick systems include built-in quality assurance and continuous improvement mechanisms. This section explains how quality is maintained and how feedback drives improvement.

### **Quality Standards Framework**

Every deliverable type in a Shipquick system should have explicit quality standards defining what makes it good.

**Quality Standard Document Structure:**

yaml  
quality\_standard\_id: "QS\_20260110220000\_UUID1"  
deliverable\_type: "technical\_blog\_post"  
standard\_version: "1.0.0"

evaluation\_criteria:  
  \- criterion\_id: "C1"  
    criterion\_name: "Technical Accuracy"  
    criterion\_weight: 0.30  
    evaluation\_method: "rubric"  
    rubric\_levels:  
      \- level: 10  
        description: "Technically flawless, all statements verifiable and correct"  
      \- level: 7  
        description: "Generally accurate with minor imprecisions that do not mislead"  
      \- level: 4  
        description: "Contains several technical errors or misleading statements"  
      \- level: 1  
        description: "Fundamentally incorrect or dangerously misleading"  
    
  \- criterion\_id: "C2"  
    criterion\_name: "Clarity of Explanation"  
    criterion\_weight: 0.25  
    evaluation\_method: "rubric"  
    rubric\_levels:  
      \- level: 10  
        description: "Crystal clear, concepts explained with perfect precision and appropriate examples"  
      \- level: 7  
        description: "Mostly clear, minor ambiguities that could confuse readers"  
      \- level: 4  
        description: "Confusing in several places, requires re-reading to understand"  
      \- level: 1  
        description: "Fundamentally unclear, concepts not properly explained"  
    
  *\# Additional criteria...*

pass\_threshold: 7.0  *\# Minimum weighted average score to pass quality check*

excellence\_threshold: 9.0  *\# Threshold for exceptional quality designation*

**Automated Quality Assessment:**

Where possible, Shipquick agents should automatically assess deliverables against quality standards:

yaml  
quality\_assessment\_id: "QAS\_20260110220000\_UUID1"  
deliverable\_id: "DEL\_20260110210000\_UUID2"  
quality\_standard\_id: "QS\_20260110220000\_UUID1"  
assessed\_by\_agent\_id: "quality\_reviewer"  
assessment\_timestamp: "2026-01-10T22:00:00.000Z"

criterion\_scores:  
  \- criterion\_id: "C1"  
    score: 8  
    score\_rationale: "Technical content is accurate. One minor imprecision in the discussion of async/await but does not mislead readers."  
    supporting\_evidence: "Verified all code examples execute correctly. Checked statements against documentation."  
    
  \- criterion\_id: "C2"  
    score: 9  
    score\_rationale: "Explanations are clear and well-structured. Good use of examples to illustrate concepts."  
    supporting\_evidence: "Followed logical flow easily. Examples directly support concepts."

overall\_score: 8.5  
pass\_threshold: 7.0  
assessment\_result: "PASS"  
quality\_level: "EXCELLENT"

improvement\_recommendations:  
  \- "Consider adding a diagram to visualize the async execution model"

  \- "The section on error handling could benefit from a concrete example"

This assessment provides specific feedback the user can act on.

### **Feedback Collection**

Shipquick systems should actively collect feedback to drive improvement.

**Explicit Feedback Collection:**

After completing deliverables or workflows, prompt users for feedback:

You have completed the Model Development Cycle workflow. 

How would you rate this workflow experience?

\[1\] ⭐ Poor \- Major problems, did not help achieve goal  
\[2\] ⭐⭐ Fair \- Some value but significant issues  
\[3\] ⭐⭐⭐ Good \- Generally helpful, minor issues  
\[4\] ⭐⭐⭐⭐ Very Good \- Worked well, would recommend  
\[5\] ⭐⭐⭐⭐⭐ Excellent \- Extremely helpful, exceeded expectations

\[Enter 1-5\]

What worked well about this workflow?

What could be improved?

Any specific steps that were confusing or unnecessary?

Store this feedback in the interaction history layer and use it to improve the workflow.

**Implicit Feedback Detection:**

The system should detect implicit feedback signals:

* If the user abandons a workflow partway through repeatedly, the workflow may have issues  
* If the user asks for help or clarification frequently on a specific step, that step may be unclear  
* If the user takes much longer than estimated duration, the estimate or step difficulty may be off  
* If the user produces deliverables that fail quality checks repeatedly, the workflow may not be teaching effectively

These signals should trigger review and potential workflow improvements.

### **Continuous Improvement Mechanisms**

Feedback should drive tangible improvements to the system.

**Workflow Iteration:**

When a workflow receives consistent feedback about a problem, update the workflow:

yaml  
workflow\_improvement\_record\_id: "IMP\_20260110220000\_UUID1"  
workflow\_id: "model\_development\_cycle"  
improvement\_trigger: "repeated\_user\_feedback"  
feedback\_summary: "5 users reported confusion on step-04-evaluation about choosing between different metrics"  
improvement\_action: "Added decision tree diagram and concrete examples of when to use each metric"  
improvement\_timestamp: "2026-01-10T22:00:00.000Z"  
improvement\_made\_by: "system\_maintainer"  
before\_version: "1.0.0"

after\_version: "1.1.0"

**Agent Persona Refinement:**

If users consistently report that an agent's communication style is not working, refine the persona:

yaml  
persona\_refinement\_record\_id: "REF\_20260110220000\_UUID1"  
agent\_id: "ml\_theory\_coach"  
refinement\_trigger: "user\_feedback\_analysis"  
feedback\_summary: "Users report agent is too verbose and uses too much mathematical notation without building intuition first"  
refinement\_action: "Adjusted communication\_style to emphasize intuitive explanations before mathematical formalization. Added principle to check user understanding before diving into formulas."  
refinement\_timestamp: "2026-01-10T22:00:00.000Z"  
before\_version: "1.0.0"

after\_version: "1.1.0"

**Quality Standard Evolution:**

As understanding of what makes quality deliverables improves, update quality standards:

yaml  
standard\_evolution\_record\_id: "EVO\_20260110220000\_UUID1"  
quality\_standard\_id: "QS\_20260110220000\_UUID1"  
evolution\_trigger: "assessment\_analysis"  
analysis\_summary: "Review of 50 assessed blog posts shows code examples are critical to quality but current standard does not explicitly require them"  
evolution\_action: "Added new criterion C6: Code Example Quality with 15% weight. Adjusted other weights to accommodate."  
evolution\_timestamp: "2026-01-10T22:00:00.000Z"  
before\_version: "1.0.0"

after\_version: "1.1.0"

---

## **Inter-Agent Communication and Collaboration**

Effective multi-agent collaboration requires explicit patterns for how agents work together. This section explains communication and coordination mechanisms that enable seamless teamwork across specialist agents.

### **Shared Context as Communication Medium**

Agents primarily communicate through shared context rather than direct messaging. This architectural choice ensures that all communication is persistent, auditable, and available for future reference.

**Context-Based Information Sharing:**

When Agent A completes work that Agent B needs to know about, Agent A updates shared context layers appropriately:

```yaml
# Agent A (Design Specialist) updates session context after completing design work:
session_observations:
  - observation_id: "OBS_20260110220000_UUID1"
    observation_type: "work_completed"
    observation_description: "Completed wireframes and design system for portfolio website. User chose modern minimalist style with blue/gray color palette. Designed mobile-first responsive layouts for all pages."
    artifacts_produced: ["wireframes.fig", "design_system.md"]
    next_agent_should_know: "Design decisions: modern minimalist style, blue/gray palette, mobile-first"
    handoff_ready: true
    receiving_agent_type: "technical_implementer"
```

The receiving agent (Technical Implementation Specialist) reads this observation when activated and immediately has context about what was decided in the design phase.

### **Agent Handoff Protocol**

When work transitions from one agent to another, a formal handoff protocol ensures no context is lost.

**Handoff Document Structure:**

```yaml
handoff_id: "HND_20260110223000_UUID1"
handoff_timestamp: "2026-01-10T22:30:00.000Z"
from_agent:
  agent_id: "design_specialist"
  agent_name: "Design Specialist"
  session_duration_minutes: 45
to_agent:
  agent_id: "technical_implementer"
  agent_name: "Technical Implementation Specialist"
  
handoff_reason: "design_phase_complete"
handoff_type: "workflow_sequence" | "user_request" | "expertise_boundary" | "collaboration"

context_transfer:
  summary: "Completed full UI/UX design for portfolio website including wireframes, design system, and responsive layouts."
  
  key_decisions:
    - decision_id: "DEC_001"
      decision: "Modern minimalist aesthetic with generous whitespace"
      rationale: "Aligns with user's preference for clean, professional look"
    - decision_id: "DEC_002"
      decision: "Mobile-first responsive approach"
      rationale: "Analytics show 60% of portfolio visitors use mobile devices"
    - decision_id: "DEC_003"
      decision: "Blue/gray color palette with orange accent"
      rationale: "Conveys professionalism while maintaining visual interest"
  
  artifacts_to_reference:
    - artifact_id: "ART_001"
      name: "wireframes.fig"
      location: "/outputs/design/wireframes.fig"
      description: "Complete wireframes for all pages"
    - artifact_id: "ART_002"
      name: "design_system.md"
      location: "/outputs/design/design_system.md"
      description: "Colors, typography, spacing, components"
  
  constraints_identified:
    - "Must maintain 60fps animations on mobile devices"
    - "Maximum 3 web fonts to minimize load time"
    - "Images must be lazy-loaded for performance"
  
  open_questions:
    - "User undecided on contact form vs. email link - defer to implementation phase"
  
  recommended_next_steps:
    - "Set up project structure following design system"
    - "Implement responsive grid system first"
    - "Build reusable components before page layouts"

acknowledgment:
  received_by_agent_id: "technical_implementer"
  received_timestamp: "2026-01-10T22:31:00.000Z"
  context_understood: true
  clarification_needed: false
```

**Handoff Execution Steps:**

1. **Completing Agent Actions:**
   - Finalize all in-progress work
   - Document key decisions with rationale
   - List all produced artifacts with locations
   - Identify any constraints or open questions
   - Update session context with handoff_ready flag

2. **Orchestrator Actions:**
   - Receive handoff notification
   - Create handoff document
   - Notify user of transition
   - Activate receiving agent with handoff context

3. **Receiving Agent Actions:**
   - Load handoff document as priority context
   - Acknowledge receipt
   - Review key decisions and artifacts
   - Ask clarifying questions if needed
   - Begin work with full context

### **Party Mode: Multi-Agent Collaboration**

Party Mode enables multiple agents to be active simultaneously, providing diverse perspectives on complex problems.

**When to Use Party Mode:**

- Complex decisions requiring multiple expertise areas
- Brainstorming sessions benefiting from diverse viewpoints
- Quality reviews where different specialists assess different aspects
- Strategic planning spanning multiple domains
- Conflict resolution between competing approaches

**Party Mode Session Structure:**

```yaml
party_mode_session_id: "PMS_20260110230000_UUID1"
session_start_timestamp: "2026-01-10T23:00:00.000Z"
session_topic: "Architecture review for portfolio website scalability"
session_type: "review" | "brainstorm" | "planning" | "conflict_resolution"

participating_agents:
  - agent_id: "technical_implementer"
    role_in_session: "primary_contributor"
    expertise_focus: "Implementation feasibility and performance"
  - agent_id: "design_specialist"
    role_in_session: "contributor"
    expertise_focus: "Design implications and user experience"
  - agent_id: "quality_reviewer"
    role_in_session: "evaluator"
    expertise_focus: "Standards compliance and quality criteria"

moderator: "orchestrator"

session_rules:
  - "Each agent speaks from their domain expertise only"
  - "Disagreements are documented with rationale from each side"
  - "User makes final decisions on contested points"
  - "All contributions logged with agent attribution"

discussion_log:
  - entry_id: "ENT_001"
    timestamp: "2026-01-10T23:05:00.000Z"
    agent_id: "technical_implementer"
    contribution_type: "proposal"
    content: "Recommend using static site generation for performance. Portfolio content rarely changes, so we can pre-render everything."
    
  - entry_id: "ENT_002"
    timestamp: "2026-01-10T23:07:00.000Z"
    agent_id: "design_specialist"
    contribution_type: "concern"
    content: "Static generation works, but we need to ensure the contact form still functions. Consider serverless function for form handling."
    references_entry: "ENT_001"
    
  - entry_id: "ENT_003"
    timestamp: "2026-01-10T23:09:00.000Z"
    agent_id: "quality_reviewer"
    contribution_type: "evaluation"
    content: "Both approaches valid. Static + serverless meets performance requirements while maintaining functionality. Recommend this hybrid approach."
    references_entries: ["ENT_001", "ENT_002"]

session_outcomes:
  decisions_made:
    - "Use static site generation with serverless form handling"
  action_items:
    - assigned_to: "technical_implementer"
      action: "Implement static site build pipeline"
    - assigned_to: "technical_implementer"
      action: "Set up serverless function for contact form"
  unresolved_items: []
  
session_end_timestamp: "2026-01-10T23:30:00.000Z"
session_quality_rating: 9
```

**Party Mode Facilitation Rules:**

1. **Orchestrator as Moderator:**
   - Introduces the topic and participating agents
   - Ensures each agent contributes from their expertise
   - Prevents agents from speaking outside their domain
   - Summarizes points of agreement and disagreement
   - Guides toward resolution or escalates to user

2. **Agent Participation:**
   - Agents speak only when they have domain-relevant input
   - Agents explicitly acknowledge valid points from other agents
   - Agents frame disagreements constructively with alternatives
   - Agents defer to user on value judgments

3. **Contribution Types:**
   - **Proposal:** Suggesting an approach or solution
   - **Concern:** Raising an issue with a proposal
   - **Support:** Endorsing another agent's point
   - **Clarification:** Asking for or providing additional detail
   - **Evaluation:** Assessing proposals against criteria
   - **Synthesis:** Combining multiple viewpoints into unified approach

### **Conflict Resolution Between Agents**

When agents disagree on the best approach, explicit conflict resolution mechanisms ensure productive outcomes.

**Conflict Documentation:**

```yaml
conflict_id: "CNF_20260110233000_UUID1"
conflict_timestamp: "2026-01-10T23:30:00.000Z"
conflict_type: "technical_approach" | "priority" | "resource_allocation" | "quality_tradeoff"

conflicting_agents:
  - agent_id: "technical_implementer"
    position: "Use React framework for component reusability"
    rationale: "React ecosystem offers better long-term maintainability and extensive component libraries"
    supporting_evidence: ["Industry adoption rates", "Available tutorials", "Job market relevance"]
    
  - agent_id: "performance_specialist"
    position: "Use vanilla JavaScript for optimal performance"
    rationale: "Portfolio is simple enough that framework overhead is unnecessary. Faster load times improve user experience."
    supporting_evidence: ["Bundle size comparison", "Lighthouse scores", "Core Web Vitals impact"]

common_ground:
  - "Both agree performance matters for portfolio"
  - "Both agree maintainability is important"
  - "Both agree user should be able to update content easily"

resolution_approach: "user_decision" | "data_driven" | "compromise" | "defer"

resolution_process:
  - step: 1
    action: "Present both positions to user with trade-offs"
    outcome: "User values performance but also wants learning opportunity"
  - step: 2
    action: "Propose compromise: Use lightweight framework (Preact)"
    outcome: "Both agents agree this balances concerns"
  - step: 3
    action: "User approves compromise approach"
    outcome: "Conflict resolved"

final_resolution:
  chosen_approach: "Use Preact for React-like development with smaller bundle size"
  rationale: "Balances performance concerns with maintainability and learning value"
  resolved_by: "user"
  resolution_timestamp: "2026-01-10T23:45:00.000Z"
  
lessons_learned:
  - "When framework choice conflicts arise, consider lightweight alternatives"
  - "User values and learning goals are important decision factors"
```

**Resolution Strategies:**

1. **Data-Driven Resolution:** When possible, resolve conflicts with objective data. Run experiments, benchmarks, or prototypes to determine which approach actually performs better.

2. **User Decision:** For value-based conflicts (speed vs. features, simplicity vs. flexibility), present options clearly to the user and let them decide based on their priorities.

3. **Compromise:** Find middle-ground solutions that address concerns from both sides, even if neither side gets their preferred approach entirely.

4. **Defer:** For non-blocking conflicts, document both positions and defer decision until more information is available or the decision becomes necessary.

### **Collaboration Patterns**

Different types of work require different collaboration patterns.

**Sequential Collaboration:**

Agents work in sequence, each completing their phase before handing off to the next. Best for well-defined processes with clear phase boundaries.

```
Design Specialist → Technical Implementer → Quality Reviewer → Deployment Specialist
```

**Parallel Collaboration:**

Multiple agents work simultaneously on different aspects of the same goal. Best when work can be divided into independent streams.

```
                    ┌─→ Content Writer (copy)
User Goal ─→ Start ─┼─→ Design Specialist (visuals)
                    └─→ Technical Implementer (code)
                              ↓
                         Integration Point
```

**Iterative Collaboration:**

Agents cycle through reviews and refinements. Best for creative work requiring multiple perspectives and iterations.

```
Writer ─→ Editor ─→ Writer ─→ Editor ─→ Final Review
```

**Consultative Collaboration:**

One agent leads while consulting others for specific expertise. Best when work primarily falls in one domain but requires occasional input from others.

```
Technical Implementer (lead)
    ├── Consults: Design Specialist (UI questions)
    ├── Consults: Performance Specialist (optimization)
    └── Consults: Security Specialist (auth implementation)
```

### **Communication Logs and Audit Trails**

All inter-agent communication is logged for transparency and learning.

**Communication Log Schema:**

```yaml
communication_log_id: "CLOG_20260110_UUID1"
user_profile_id: "USR_..."
goal_id: "GOAL_..."

entries:
  - entry_id: "ENTRY_001"
    timestamp: "2026-01-10T22:00:00.000Z"
    communication_type: "handoff" | "consultation" | "party_mode" | "conflict"
    participants: ["design_specialist", "technical_implementer"]
    summary: "Design phase complete, handoff to implementation"
    artifacts_referenced: ["HND_20260110223000_UUID1"]
    outcome: "successful_handoff"
    
  - entry_id: "ENTRY_002"
    timestamp: "2026-01-10T23:00:00.000Z"
    communication_type: "party_mode"
    participants: ["technical_implementer", "design_specialist", "quality_reviewer"]
    summary: "Architecture review session for scalability"
    artifacts_referenced: ["PMS_20260110230000_UUID1"]
    outcome: "decision_reached"
```

This log enables analysis of collaboration patterns, identification of frequently occurring conflicts, and optimization of agent team composition over time.

---

## **Usage Patterns and Best Practices**

This section provides practical guidance for using Shipquick systems effectively, with real-world examples and detailed patterns for common scenarios.

### **Starting a New Shipquick System**

The process of creating and initializing a Shipquick system follows a structured approach that ensures all components are properly configured.

**Step 1: Define Goal Clearly**

Before engaging the meta-system, take time to articulate your goal with precision. Vague goals produce generic systems.

*Poor goal definition:*
> "I want to get better at my job"

*Excellent goal definition:*
> "I want to transition from a mid-level software developer to a senior developer capable of leading small teams and designing system architecture. Success means: (1) completing three end-to-end system designs that pass review, (2) mentoring two junior developers through project completion, (3) receiving a senior developer job offer within 8 months. Constraints: I can dedicate 10-15 hours per week outside work. My current strengths are in backend development; I need to grow in system design, communication, and technical leadership."

**Goal Definition Checklist:**

| Element | Question to Answer | Example |
|---------|-------------------|---------|
| Objective | What exactly will be different when you succeed? | "I'll be capable of designing complete systems" |
| Measurability | How will you prove you achieved it? | "Three completed system designs, two mentored juniors" |
| Timeline | By when? | "Within 8 months" |
| Constraints | What limits your approach? | "10-15 hours/week, no budget for courses" |
| Starting Point | What do you already know/have? | "Strong backend development skills" |
| Motivation | Why does this matter? | "Career advancement, intellectual challenge" |

**Step 2: Run Meta-System Analysis**

Engage the Shipquick meta-system with your defined goal. The meta-system will conduct an in-depth interview to understand requirements fully.

*Example meta-system interaction:*

```
User: "I want to become a senior developer..."

Meta-System: "Thank you for that goal statement. Let me understand better:

1. DOMAIN EXPERTISE: You mentioned backend development. What languages and 
   frameworks do you currently use? What database systems?

2. CURRENT GAPS: You mentioned system design and leadership. Have you done 
   any architecture work at all, or is this completely new territory?

3. LEARNING STYLE: Do you learn better through reading, hands-on projects, 
   video content, or mentorship? 

4. WORK CONTEXT: Is your current employer supportive of this growth? Will you 
   have opportunities to practice leadership there?

5. DELIVERABLES: When you say 'system design that passes review', who would 
   review it? What standards would apply?"
```

**Step 3: Review Proposed Agent Team**

The meta-system proposes specialist agents based on capability analysis. Review these carefully.

*Example proposed team for senior developer goal:*

| Agent | Specialty | Why Included |
|-------|-----------|--------------|
| Architecture Mentor | System design patterns, trade-off analysis | Core skill gap identified |
| Code Reviewer | Code quality, best practices, refactoring | Quality assurance for practice work |
| Leadership Coach | Communication, delegation, feedback skills | Leadership gap identified |
| Interview Prep Specialist | Technical interviews, behavioral questions | Supports job offer measurement |
| Project Coordinator | Orchestration, progress tracking, suggestions | Standard orchestrator role |

Consider: Are any agents missing? Do any seem unnecessary? Would you prefer different expertise profiles?

**Step 4: Initialize and Configure**

After generation, configure the system for your preferences:

```yaml
# user.config.yaml customization example
preferences:
  communication_language: "english"
  document_output_language: "english"
  
  interface:
    show_estimated_durations: true  # You want time estimates
    show_completion_checkboxes: true
    
  notifications:
    enable_deadline_reminders: true
    reminder_days_before_deadline: 3  # Gentle advance warning
    
  workflow:
    auto_continue_on_validation_pass: false  # You want to review each step
    pause_for_review_after_each_step: true
```

### **Effective Agent Design Patterns**

When designing custom agents, follow these patterns for maximum effectiveness.

**Pattern 1: The Expert Mentor**

For teaching and coaching scenarios, create agents with clear pedagogical approach.

```yaml
persona:
  role: "Senior Software Architect specializing in distributed systems education"
  
  identity: |
    20+ years building distributed systems at scale for Fortune 100 companies. 
    Transitioned to teaching after realizing many engineers struggle with the 
    same concepts I once found difficult. Author of "Distributed Systems Made 
    Human" which emphasizes intuition before formalism. Believes the best 
    learning happens through guided discovery, not lecture.
  
  communication_style: |
    Always starts with "why" before "how". Uses analogies from everyday life - 
    if you can't explain it to your grandmother, you don't understand it. 
    Asks probing questions rather than giving direct answers. Celebrates 
    aha-moments. Never condescending about gaps - everyone starts somewhere.
  
  principles:
    - "Intuition first, then formalization"
    - "Every question deserves respect - there are no stupid questions"
    - "Real understanding means you can teach it to others"
    - "Mistakes are learning opportunities, not failures"
```

**Pattern 2: The Quality Gatekeeper**

For review and quality assurance, create agents with rigorous standards.

```yaml
persona:
  role: "Senior Code Reviewer and Quality Assurance Specialist"
  
  identity: |
    15 years of shipping production software, 8 years leading code review 
    processes. Seen enough production incidents to know that 'good enough' 
    often isn't. Not a perfectionist - understands trade-offs - but refuses 
    to let preventable issues reach production. Believes code review is 
    teaching, not gatekeeping.
  
  communication_style: |
    Direct and specific. Never says 'this is wrong' without explaining why 
    and suggesting alternatives. Backs up every criticism with reasoning. 
    Acknowledges good patterns when found, not just problems. Uses severity 
    levels: 'must fix', 'should fix', 'consider changing', 'nit'.
  
  principles:
    - "Every critique must include a suggestion for improvement"
    - "Severity matters - not everything is equally important"
    - "Maintainability beats cleverness every time"
    - "Tests are not optional - untested code is broken code waiting to happen"
```

**Pattern 3: The Strategic Advisor**

For high-level planning and decision-making, create agents with strategic perspective.

```yaml
persona:
  role: "Career Strategy Advisor for Technical Professionals"
  
  identity: |
    Former engineering manager turned career coach. Helped 200+ engineers 
    navigate promotions, transitions, and pivots. Understands both the 
    technical and political realities of career advancement. Data-driven 
    but acknowledges the human elements that spreadsheets can't capture.
  
  communication_style: |
    Big-picture focused. Asks 'what does this mean for your 5-year trajectory?' 
    Challenges assumptions gently but persistently. Uses frameworks to organize 
    thinking but doesn't worship them. Comfortable saying 'I don't know, let's 
    figure it out together.'
  
  principles:
    - "Tactics serve strategy, not the other way around"
    - "Your career is a marathon, not a sprint"
    - "Relationships matter as much as skills"
    - "Success is personal - define it for yourself"
```

### **Effective Workflow Design Patterns**

Well-designed workflows guide users through complex processes without overwhelming them.

**Pattern 1: The Discovery Workflow**

For gathering requirements or understanding problems, use structured discovery.

```markdown
# Step 1: Initial Context Gathering

**Objective:** Understand the user's starting point and constraints.

**Part A: Background Assessment**

Ask the user to describe their current situation in their own words. 
Listen for: pain points, attempted solutions, constraints, and goals.
Do not interrupt - let them fully explain before asking clarifying questions.

**Part B: Structured Clarification**

Now ask specific questions to fill gaps:
1. What triggered this project? Why now?
2. Who are the stakeholders? Who decides success?
3. What does failure look like? What must we avoid?
4. What's the timeline and what drives it?
5. What resources are available?

**Part C: Summary and Confirmation**

Summarize what you heard back to the user:
"Based on our discussion, I understand that [summary]. 
Is this accurate? What did I miss or misunderstand?"

---

**Outputs:**
- [ ] Documented background context
- [ ] Answered clarification questions
- [ ] User-confirmed summary

**Validation:**
- [ ] User confirms summary is accurate
- [ ] No major gaps in understanding
```

**Pattern 2: The Iterative Refinement Workflow**

For creative work that improves through cycles, structure iterations explicitly.

```markdown
# Step 4: Design Iteration Cycle

**Objective:** Refine the design through structured feedback cycles.

This step repeats until the design meets approval criteria.

**Part A: Present Current Version**

Display the current design version with:
- Screenshot or description
- List of changes since last iteration
- Known issues or limitations

**Part B: Gather Feedback**

Ask structured feedback questions:
1. What works well about this version?
2. What doesn't work or feels off?
3. What's missing that should be there?
4. What's there that should be removed?
5. On a scale of 1-10, how close is this to done?

**Part C: Process Feedback**

For each piece of feedback:
- Acknowledge the input
- Explain how it will be addressed
- If you disagree, explain why and propose alternative

**Part D: Implement Changes**

Make the requested changes and update the design version number.

---

**Exit Criteria:**
- User rates design 8+ out of 10
- No 'must fix' feedback items remain
- User explicitly approves moving forward

**If criteria not met:** Return to Part A with new version
```

**Pattern 3: The Validation Workflow**

For quality assurance, structure validation systematically.

```markdown
# Step 7: Quality Validation

**Objective:** Verify the deliverable meets all quality standards.

**Part A: Checklist Verification**

Review each quality criterion:

| Criterion | Standard | Actual | Pass? |
|-----------|----------|--------|-------|
| Code coverage | ≥80% | __% | [ ] |
| Performance | <2s load time | __s | [ ] |
| Accessibility | WCAG AA compliant | | [ ] |
| Documentation | All public APIs documented | | [ ] |

**Part B: Edge Case Testing**

Test the following edge cases:
1. Empty input handling
2. Maximum input size
3. Invalid input handling
4. Network failure scenarios
5. Concurrent access

Document results for each test.

**Part C: User Acceptance Preview**

Walk through the deliverable as an end user would:
1. Complete the primary use case
2. Attempt a secondary use case
3. Try to break it (adversarial testing)

---

**Outputs:**
- [ ] Completed quality checklist
- [ ] Edge case test results
- [ ] User acceptance preview notes

**Validation:**
- [ ] All checklist items pass
- [ ] No critical edge case failures
- [ ] User acceptance preview successful
```

### **Daily Usage Patterns**

Different situations call for different interaction approaches.

**Pattern: The Focused Sprint**

When you have dedicated time for deep work:

```
You: "I have 3 uninterrupted hours today. What's the highest-impact work 
     I can do in that time?"

Orchestrator: "Looking at your progress, you're 70% through the 
'System Design Fundamentals' workflow. The next step is 'Design a 
Caching Layer' which takes 2-3 hours. This would complete a major 
milestone. Alternatively, you have two small tasks (~30 min each) 
that have been pending for a week. 

Recommendation: Complete the caching layer design for maximum impact.
Would you like me to activate the Architecture Mentor for this?"
```

**Pattern: The Quick Check-in**

When you have limited time:

```
You: "Just have 15 minutes. What quick win can I do?"

Orchestrator: "Three options that fit 15 minutes:
1. Review feedback on your last code submission (10 min)
2. Complete the short quiz on API design principles (12 min)  
3. Read the architecture article you bookmarked (15 min)

All three advance your goal. Option 1 has been waiting longest."
```

**Pattern: The Blocked Recovery**

When you're stuck:

```
You: "I've been trying to design this authentication system for 2 days 
     and I'm completely stuck."

Orchestrator: "Let's diagnose this. I'll activate the Architecture 
Mentor in consultation mode. But first:

1. What specific aspect are you stuck on? (Token management? Session 
   handling? OAuth integration?)
2. What have you tried so far?
3. What resources have you already consulted?

Understanding where you are will help us provide targeted help rather 
than generic explanations."
```

**Pattern: The Progress Review**

When you want to assess overall trajectory:

```
You: "How am I tracking toward my 8-month goal?"

Orchestrator: "Here's your progress dashboard:

📊 OVERALL: 35% complete | On Track for Month 3/8

✅ COMPLETED:
- System Design Fundamentals (3 weeks)
- First architecture review (passed!)

🔄 IN PROGRESS:  
- Advanced Patterns (60% done)
- Mentoring Junior Dev #1 (2/4 milestones)

⏳ NOT STARTED:
- Second architecture project
- Interview preparation

📈 TREND: You've been averaging 12 hours/week against 10-15 target. 
At this pace, you'll finish ~1 month early.

⚠️ RISK: Leadership coaching hasn't started. Recommend beginning in 
next 2 weeks to stay on track.

Would you like to review any area in detail?"
```

---

## **CRITICAL RULES - DO's and DON'Ts**

This section consolidates the non-negotiable rules that every Shipquick implementation must follow. These rules exist because violating them causes specific, predictable failures.

### **16.1 Data Persistence Rules**

✅ **ALWAYS:**

* Generate unique IDs for every entity (PREFIX\_TIMESTAMP\_UUID)  
* Include created\_timestamp and last\_modified\_timestamp  
* Increment version with every update  
* Use ISO 8601 format for all timestamps with UTC  
* Reference entities by ID, never by name  
* Maintain change logs for critical entities  
* Use soft deletion (deleted flag) not hard deletion  
* Document why data is being created

❌ **NEVER:**

* Create entities without IDs  
* Omit timestamps  
* Skip version incrementing  
* Use relative timestamps ("5 minutes ago")  
* Reference by name or description  
* Hard delete without very good reason  
* Assume data will be remembered without storing it

### **16.2 Workflow Execution Rules**

✅ **ALWAYS:**

* Read entire step file before executing  
* Follow instructions sequentially (Part A, B, C)  
* Halt at menus and wait for user input  
* Update step frontmatter before loading next step  
* Load only current step (just-in-time)  
* Validate completion before proceeding  
* Save workflow state after each step

❌ **NEVER:**

* Load multiple steps simultaneously  
* Skip ahead or optimize the sequence  
* Anticipate future steps  
* Auto-execute without user confirmation  
* Skip validation criteria  
* Proceed with failed validation  
* Create mental todo lists from future steps

### **16.3 Agent Behavior Rules**

✅ **ALWAYS:**

* Embody the defined persona consistently  
* Load required context at activation  
* Stay within domain of expertise  
* Update context layers when observations made  
* Hand off appropriately when out of domain  
* Maintain communication style throughout  
* Follow principles when making decisions

❌ **NEVER:**

* Break character or speak generically  
* Operate without loading context  
* Provide advice outside expertise  
* Fail to record observations  
* Operate beyond competence without handoff  
* Shift communication style arbitrarily  
* Ignore stated principles

### **16.4 Context Access Rules**

✅ **ALWAYS:**

* Declare required context in agent definition  
* Query context explicitly when needed  
* Update context immediately after changes  
* Propagate observations to persistent layers  
* Link related entities by ID  
* Check schema version when reading  
* Handle missing or stale context gracefully

❌ **NEVER:**

* Assume context loaded automatically  
* Delay context queries until too late  
* Batch updates or do them "later"  
* Leave session observations unprocessed  
* Create implicit relationships  
* Assume latest schema version  
* Fail silently on missing context

### **16.5 Orchestrator Behavior Rules**

✅ **ALWAYS:**

* Provide contextual routing based on full state  
* Explain routing decisions to user  
* Proactively suggest next actions  
* Monitor progress across all workstreams  
* Coordinate multi-agent collaborations  
* Learn from user patterns  
* Maintain big-picture awareness

❌ **NEVER:**

* Route purely on keywords  
* Switch agents without explanation  
* Wait passively without suggestions  
* Lose track of progress  
* Let agents work in isolation when collaboration needed  
* Ignore productivity patterns  
* Get lost in specialist details

---

## **17\. Data Relationships and Schema Reference**

### **17.1 Entity Relationship Diagram**

**Core Entities and Relationships:**

UserProfile (1) ←→ (\*) Goal  
    │  
    └─→ (\*) Progress  
    │  
    └─→ (\*) Session  
    │  
    └─→ (1) KnowledgeGraph  
    │  
    └─→ (1) InteractionHistory

Goal (1) ←→ (\*) Progress  
     │  
     └─→ (\*) Milestone  
     │  
     └─→ (\*) WorkflowState

Progress (\*) ←→ (\*) Deliverable  
         │  
         └─→ (\*) SkillProgression  
         │  
         └─→ (\*) MilestoneProgress

Session (\*) ←→ (\*) Agent  
        │  
        └─→ (\*) Workflow  
        │  
        └─→ (\*) Artifact  
        │  
        └─→ (\*) Observation

KnowledgeGraph (1) ←→ (\*) Node  
                │  
                └─→ (\*) Edge  
                │  
                └─→ (\*) Cluster  
                │  
                └─→ (\*) LearningPath

### **17.2 Key Relationships**

**User to Goals:** One user can have multiple goals (current and historical)

**User to Progress:** Each goal has associated progress tracking

**Goal to Milestones:** Goals decompose into milestones

**Progress to Deliverables:** Progress tracks completed and in-progress deliverables

**Session to Agents:** Sessions activate one or more agents

**Session to Workflows:** Sessions execute workflows

**Knowledge Graph to Nodes/Edges:** Graph contains nodes connected by edges

**All entities to User:** Everything traces back to specific user via user\_profile\_id

### **17.3 Common Query Patterns**

**Get user's active goal:**

SELECT \* FROM goals   
WHERE user\_profile\_id \= 'USR\_...'   
ORDER BY created\_timestamp DESC   
LIMIT 1

**Get current progress:**

SELECT \* FROM progress  
WHERE user\_profile\_id \= 'USR\_...'   
  AND goal\_id \= 'GOAL\_...'  
ORDER BY last\_modified\_timestamp DESC  
LIMIT 1

**Get completed deliverables:**

SELECT \* FROM deliverables  
WHERE progress\_id \= 'PRG\_...'  
  AND completion\_timestamp IS NOT NULL  
ORDER BY completion\_timestamp DESC

**Get knowledge graph nodes for concept:**

SELECT \* FROM nodes  
WHERE knowledge\_graph\_id \= 'KG\_...'  
  AND node\_type \= 'concept'  
  AND node\_name LIKE '%machine learning%'

---

## **Troubleshooting and Debugging**

This section provides comprehensive guidance for diagnosing and resolving issues in Shipquick systems. For each problem type, we cover symptoms, root causes, diagnostic procedures, and resolution steps.

### **Systematic Debugging Approach**

Before diving into specific issues, follow this systematic approach:

**Step 1: Gather Information**
- What exactly is the user experiencing?
- When did it start happening?
- What changed recently? (configuration, agents, workflows)
- Is it reproducible?

**Step 2: Isolate the Component**
- Is this an agent issue, workflow issue, context issue, or orchestrator issue?
- Test components individually

**Step 3: Check Logs**
- Review relevant log files
- Look for error messages and stack traces
- Note timestamps of failures

**Step 4: Validate Configuration**
- Check all relevant YAML/XML files
- Verify file paths and references
- Confirm schema versions

### **Agent Issues**

#### **Issue: Agent Not Loading Context Properly**

**Symptoms:**
- Agent asks for information already in user profile
- Agent doesn't reference past work or decisions
- Agent provides generic advice instead of personalized guidance
- Agent seems to "forget" previous sessions

**Root Cause Analysis:**

| Potential Cause | Diagnostic Check | Resolution |
|-----------------|------------------|------------|
| Missing context_requirements | Review agent file for context_requirements section | Add required context declarations |
| Wrong user_profile_id | Compare IDs in session vs. context files | Correct ID mismatch |
| Context engine not accessible | Check context engine initialization logs | Restart context engine, verify paths |
| Stale context cache | Check context file timestamps | Clear cache, force reload |
| Schema version mismatch | Compare schema_version in context vs. agent | Migrate or update schema |

**Diagnostic Procedure:**

```yaml
# Context Loading Diagnostic Log
diagnostic_id: "DIAG_20260110_001"
issue_type: "context_loading_failure"
agent_id: "writing_coach"

checks_performed:
  - check: "agent_file_valid"
    result: "PASS"
    details: "Agent file parses without errors"
    
  - check: "context_requirements_declared"
    result: "FAIL"
    details: "Agent requires user_profile but doesn't declare it"
    
  - check: "context_engine_accessible"
    result: "PASS"
    details: "Context engine responds to ping"
    
  - check: "user_profile_exists"
    result: "PASS"
    details: "User profile found: USR_20260101120000_UUID1"

root_cause: "Missing context_requirements declaration in agent file"
resolution: "Add context_requirements section declaring user_profile dependency"
```

#### **Issue: Agent Breaking Character**

**Symptoms:**
- Agent starts responding in generic AI assistant voice
- Agent stops using defined communication style
- Agent provides advice outside declared expertise
- Persona feels inconsistent session to session

**Root Cause Analysis:**

| Potential Cause | Diagnostic Check | Resolution |
|-----------------|------------------|------------|
| Weak persona definition | Review persona section strength | Strengthen identity and principles |
| Activation sequence skipped | Check if Steps 1-3 executed | Debug activation flow |
| Conflicting instructions | Check for contradictory rules | Harmonize agent instructions |
| Context overwhelming persona | Check context load size | Reduce context, prioritize persona |

**Prevention:**
- Include explicit instruction: "NEVER break character"
- Add persona reinforcement at menu re-display
- Include periodic persona checks in long sessions

### **Workflow Issues**

#### **Issue: Workflow Skipping Steps**

**Symptoms:**
- Steps execute out of order
- Validation not happening before progression
- State not saving between sessions
- User finds themselves at unexpected workflow points

**Root Cause Analysis:**

| Potential Cause | Diagnostic Check | Resolution |
|-----------------|------------------|------------|
| Multiple steps loaded | Check context size during execution | Enforce just-in-time loading |
| Missing wait-for-input | Review step files for halt points | Add explicit wait instructions |
| Failed state save | Check workflow state file writes | Fix permissions, validate paths |
| Corrupted step sequence | Verify step naming convention | Fix step numbering |

**Diagnostic Procedure:**

```yaml
workflow_execution_trace:
  workflow_id: "create_portfolio_website"
  trace_start: "2026-01-10T20:00:00.000Z"
  
  step_events:
    - event_type: "step_load"
      step_id: "step-01-init"
      timestamp: "2026-01-10T20:00:01.000Z"
      status: "SUCCESS"
      
    - event_type: "step_execute"
      step_id: "step-01-init"
      timestamp: "2026-01-10T20:00:02.000Z"
      substeps_completed: ["Part A", "Part B", "Part C"]
      
    - event_type: "validation_check"
      step_id: "step-01-init"
      timestamp: "2026-01-10T20:15:00.000Z"
      validation_result: "PASS"
      criteria_checked: 3
      criteria_passed: 3
      
    - event_type: "user_input"
      timestamp: "2026-01-10T20:15:05.000Z"
      input: "Continue"
      
    - event_type: "step_load"
      step_id: "step-02-design"
      timestamp: "2026-01-10T20:15:06.000Z"
      status: "SUCCESS"
      note: "Previous step properly unloaded"
      
  issues_detected: []
  trace_status: "HEALTHY"
```

#### **Issue: Workflow State Corruption**

**Symptoms:**
- Cannot resume workflow from saved state
- Duplicate step executions
- Missing completed step records
- Inconsistent progress percentages

**Resolution Procedure:**

1. **Backup current state** to preserve evidence
2. **Validate state file** against schema
3. **Cross-reference** with step file existence
4. **Rebuild state** from known good points if necessary
5. **Test resumption** before returning to user

### **Context Issues**

#### **Issue: Context Not Persisting Across Sessions**

**Symptoms:**
- User needs to re-explain situation each time
- System doesn't remember decisions made
- Progress tracking shows no data
- Previous observations lost

**Root Cause Analysis:**

| Potential Cause | Diagnostic Check | Resolution |
|-----------------|------------------|------------|
| Session observation not propagating | Check propagation flags | Enable context_propagation |
| File write failures | Check disk permissions | Fix directory permissions |
| Path misconfiguration | Verify output_folder path | Correct configuration paths |
| ID linking broken | Verify user_profile_id references | Fix ID references |

**Diagnostic Commands:**

```bash
# Check context directory structure
ls -la sq_core/context/data/

# Verify file permissions
stat sq_core/context/data/user_profiles/

# Check recent context modifications
find sq_core/context/data/ -mmin -60 -type f

# Validate context file syntax
python -c "import yaml; yaml.safe_load(open('user_profile.yaml'))"
```

#### **Issue: Knowledge Graph Inconsistency**

**Symptoms:**
- Related concepts not linking properly
- Orphaned nodes in graph
- Duplicate entries for same concept
- Missing edges between connected ideas

**Resolution:**

```yaml
knowledge_graph_repair:
  timestamp: "2026-01-10T22:00:00.000Z"
  repair_type: "consistency_check"
  
  issues_found:
    - issue: "orphaned_nodes"
      count: 3
      node_ids: ["NODE_001", "NODE_002", "NODE_003"]
      action: "Review and delete or reconnect"
      
    - issue: "duplicate_concepts"
      count: 2
      duplicates:
        - ["NODE_010", "NODE_025"]  # Both "API Design"
        - ["NODE_018", "NODE_031"]  # Both "REST Principles"
      action: "Merge duplicates, update references"
      
    - issue: "missing_edges"
      count: 1
      nodes: ["NODE_010", "NODE_018"]
      expected_relationship: "prerequisite_for"
      action: "Create missing edge"
      
  repair_actions_taken:
    - action: "deleted_orphan"
      node_id: "NODE_001"
    - action: "merged_duplicate"
      kept: "NODE_010"
      removed: "NODE_025"
      references_updated: 5
```

### **Orchestrator Issues**

#### **Issue: Orchestrator Providing Poor Suggestions**

**Symptoms:**
- Suggestions not relevant to current goal
- Recommendations ignore recent progress
- Routing to wrong specialist agents
- Generic suggestions instead of personalized ones

**Root Cause Analysis:**

| Potential Cause | Diagnostic Check | Resolution |
|-----------------|------------------|------------|
| Stale progress data | Check progress layer timestamps | Refresh progress layer |
| Missing goal context | Verify goal loaded at activation | Fix goal loading sequence |
| Incomplete manifests | Review manifest completeness | Update all manifests |
| Routing logic too simple | Analyze routing decision logs | Implement contextual routing |

**Diagnostic Check:**

```yaml
orchestrator_context_audit:
  audit_timestamp: "2026-01-10T22:00:00.000Z"
  
  goal_context:
    loaded: true
    goal_id: "GOAL_20260101130000_UUID1"
    last_modified: "2026-01-08T15:00:00.000Z"
    days_stale: 2
    
  progress_context:
    loaded: true
    progress_id: "PRG_20260101140000_UUID1"
    last_modified: "2026-01-10T21:00:00.000Z"
    hours_stale: 1
    
  manifest_completeness:
    agents_manifest: 
      expected: 6
      found: 6
      status: "COMPLETE"
    workflows_manifest:
      expected: 8
      found: 7
      status: "INCOMPLETE"
      missing: ["interview_prep_workflow"]
      
  routing_decision_log:
    last_10_decisions:
      - request: "Help with system design"
        routed_to: "architecture_mentor"
        confidence: 0.95
        correct: true
      - request: "Review my code"
        routed_to: "code_reviewer"
        confidence: 0.90
        correct: true
        
  audit_result: "MOSTLY_HEALTHY"
  issues: ["workflows_manifest incomplete"]
  recommendations: ["Add missing interview_prep_workflow to manifest"]
```

### **Logging Best Practices**

Implement comprehensive logging to enable effective debugging.

**Log Levels:**

| Level | Use For | Example |
|-------|---------|---------|
| ERROR | Failures requiring attention | "Context engine unavailable" |
| WARN | Potential issues not blocking | "Context file >30 days old" |
| INFO | Significant events | "Agent activated: writing_coach" |
| DEBUG | Detailed flow information | "Loading context field: preferred_name" |
| TRACE | Very detailed debugging | "Parsing line 42 of step file" |

**Structured Log Format:**

```json
{
  "timestamp": "2026-01-10T22:00:00.000Z",
  "level": "ERROR",
  "component": "context_engine",
  "action": "load_user_profile",
  "user_id": "USR_20260101120000_UUID1",
  "session_id": "SES_20260110200000_UUID1",
  "message": "Failed to load user profile: file not found",
  "error_code": "CTX_001",
  "file_path": "/data/profiles/USR_20260101120000_UUID1.yaml",
  "stack_trace": "..."
}
```

### **Debugging Checklists**

**Agent Issues Checklist:**
- [ ] Agent file parses without syntax errors
- [ ] Activation sequence executes all steps
- [ ] Context requirements are declared
- [ ] Required context layers are accessible
- [ ] Persona section is complete and compelling
- [ ] Menu items have valid handlers
- [ ] Agent stays in character during testing

**Workflow Issues Checklist:**
- [ ] Main workflow file parses correctly
- [ ] All referenced step files exist
- [ ] Step files follow naming convention (step-XX-name.md)
- [ ] Each step has clear instructions
- [ ] Validation criteria are defined and checkable
- [ ] State saves successfully between steps
- [ ] Resumption works from saved state

**Context Issues Checklist:**
- [ ] IDs follow PREFIX_TIMESTAMP_UUID format
- [ ] Timestamps are ISO 8601 UTC format
- [ ] Version numbers increment on updates
- [ ] References use IDs not names
- [ ] Data directory has write permissions
- [ ] Context propagation flags are set
- [ ] Schema versions are compatible

**Orchestrator Issues Checklist:**
- [ ] All manifests are complete and current
- [ ] Goal context loads at activation
- [ ] Progress context is fresh
- [ ] Routing logic is contextual not keyword-based
- [ ] Suggestions are specific and actionable
- [ ] User patterns are being tracked
- [ ] Multi-agent coordination works correctly

---

## **Extension and Customization Framework**

### **19.1 Adding New Agent Types**

**Steps to add custom agent:**

1. Create agent markdown file following template  
2. Define unique persona and expertise  
3. Specify context requirements  
4. Design menu with capabilities  
5. Add to agents.manifest.csv  
6. Test activation and context loading  
7. Document agent in module README

**Example custom agent:**

\---  
agent\_id: "blockchain\_specialist"  
agent\_name: "Blockchain Specialist"  
agent\_title: "Distributed Systems and Blockchain Expert"  
\---

\<agent id="blockchain\_specialist"\>  
\<persona\>  
  \<role\>Expert in blockchain technology, distributed consensus, and smart contract development\</role\>  
  \<identity\>15 years in distributed systems. Led blockchain implementations at Fortune 500\. Deep expertise in Ethereum, Hyperledger, consensus algorithms.\</identity\>  
  \<communication\_style\>Technical and precise. Uses specific protocol names. Explains trade-offs between approaches.\</communication\_style\>  
  \<principles\>Security first. Understand consensus before building. Blockchain not always the answer.\</principles\>  
\</persona\>

\<menu\>  
  \<item cmd="\*consensus\_design" type="workflow"\>Design Consensus Mechanism\</item\>  
  \<item cmd="\*smart\_contract" type="workflow"\>Develop Smart Contract\</item\>  
  \<item cmd="\*security\_audit" type="action"\>Audit for Vulnerabilities\</item\>  
\</menu\>  
\</agent\>

### **19.2 Creating Custom Workflows**

**Steps to create custom workflow:**

1. Identify clear objective workflow achieves  
2. Decompose into 5-12 logical steps  
3. Create main workflow.md file  
4. Create step-XX-name.md for each step  
5. Define validation criteria for each step  
6. Add to workflows.manifest.csv  
7. Test execution end-to-end  
8. Document workflow in module README

**Workflow design checklist:**

* \[ \] Clear overall goal stated  
* \[ \] Steps follow logical sequence  
* \[ \] Each step has single focused objective  
* \[ \] Instructions specific and actionable  
* \[ \] Outputs clearly defined  
* \[ \] Validation criteria measurable  
* \[ \] Dependencies identified  
* \[ \] Duration estimates provided

### **19.3 Adding New Context Layers**

**When to add custom context layer:**

* Domain has unique persistent data needs  
* Existing layers don't capture essential relationships  
* Specialized querying required

**Steps to add context layer:**

1. Design schema with required fields  
2. Create schema YAML file  
3. Add layer to context engine  
4. Update agents to access/update layer  
5. Create migration for existing data  
6. Document layer purpose and usage  
7. Add example queries

**Custom layer example:**

\# financial\_tracking.schema.yaml  
financial\_tracking\_id: "FIN\_\[TIMESTAMP\]\_\[UUID\]"  
user\_profile\_id: "USR\_..."  
goal\_id: "GOAL\_..."

budget:  
  total\_budget: decimal  
  currency: string  
  allocated: decimal  
  spent: decimal  
  remaining: decimal

expenses:  
  \- expense\_id: "EXP\_..."  
    category: string  
    amount: decimal  
    date: "YYYY-MM-DD"  
    description: string  
    related\_deliverable\_id: "DEL\_..."

revenue:  
  \- revenue\_id: "REV\_..."  
    source: string  
    amount: decimal  
    date: "YYYY-MM-DD"

### **19.4 Integrating External Tools**

**Integration patterns:**

**API Integration:**

* Create wrapper functions in Python  
* Add to agent menu as capabilities  
* Document authentication requirements  
* Handle rate limiting appropriately  
* Store API responses in context

**Local Tool Integration:**

* Create bash wrappers for command-line tools  
* Add menu items that call tools  
* Capture output and store in context  
* Handle errors gracefully  
* Document tool installation

**Example API integration:**

\# In specialized agent  
def call\_external\_api(self, endpoint, data):  
    """Call external tool API and store result."""  
    response \= requests.post(  
        f"{API\_BASE}/{endpoint}",  
        headers={"Authorization": f"Bearer {API\_KEY}"},  
        json=data  
    )  
      
    \# Store result in context  
    artifact\_id \= self.context\_engine.create('artifact', {  
        'artifact\_id': self.context\_engine.\_generate\_id('ART'),  
        'artifact\_type': 'api\_response',  
        'content': response.json(),  
        'created\_by\_tool': endpoint  
    })  
      
    return artifact\_id

---

## **20\. Complete Templates**

### **20.1 Agent Template**

\---  
agent\_id: "agent\_identifier"  
agent\_name: "Agent Name"  
agent\_title: "Professional Title"  
agent\_icon: "📊"  
agent\_category: "category"  
created\_timestamp: "ISO8601\_UTC"  
last\_modified\_timestamp: "ISO8601\_UTC"  
version: 1  
schema\_version: "1.0.0"  
\---

Embody this persona exactly. NEVER break character.

\`\`\`xml  
\<agent id="{agent\_id}" name="{agent\_name}"\>  
    
\<activation critical="MANDATORY"\>  
  \<step n="1"\>Load persona from file\</step\>  
  \<step n="2"\>Load config from {config\_path}\</step\>  
  \<step n="3"\>Load user context: preferred\_name, learning\_preferences, skills\</step\>  
  \<step n="4"\>Load goal context: objective, constraints, milestones\</step\>  
  \<step n="5"\>Load progress: deliverables, current\_work\</step\>  
  \<step n="6"\>Greet user by name\</step\>  
  \<step n="7"\>Present menu\</step\>  
  \<step n="8"\>Wait for input\</step\>  
\</activation\>

\<persona\>  
  \<role\>\[Expertise Level\] \[Domain\] \[Function\]\</role\>  
    
  \<identity\>  
  \[3-5 sentences establishing credibility:  
  \- Years of experience  
  \- Specific expertise domains    
  \- Notable achievements  
  \- Approach or philosophy  
  \- What makes this agent unique\]  
  \</identity\>  
    
  \<communication\_style\>  
  \[2-3 sentences describing:  
  \- Tone (direct, warm, precise, etc.)  
  \- Vocabulary (technical, accessible, etc.)  
  \- Interaction patterns  
  \- Use of questions vs statements  
  \- Level of directness\]  
  \</communication\_style\>  
    
  \<principles\>  
  \[3-5 core beliefs that guide decisions:  
  \- What agent values most  
  \- Preferred trade-offs  
  \- What agent pushes back against  
  \- What agent advocates for\]  
  \</principles\>  
\</persona\>

\<context\_requirements\>  
  \<required\_context\>  
    \<context\_layer name="user\_profile"\>  
      \<fields\>\["preferred\_name", "skill\_levels"\]\</fields\>  
      \<access\_frequency\>every\_activation\</access\_frequency\>  
    \</context\_layer\>  
    \<context\_layer name="goal"\>  
      \<fields\>\["primary\_objective", "constraints"\]\</fields\>  
      \<access\_frequency\>every\_activation\</access\_frequency\>  
    \</context\_layer\>  
    \<context\_layer name="progress"\>  
      \<fields\>\["completed\_deliverables", "in\_progress\_work"\]\</fields\>  
      \<access\_frequency\>on\_demand\</access\_frequency\>  
    \</context\_layer\>  
  \</required\_context\>  
    
  \<produced\_context\>  
    \<updates\_context\_layer name="session"\>  
      \<fields\>\["active\_agents", "session\_observations"\]\</fields\>  
    \</updates\_context\_layer\>  
    \<updates\_context\_layer name="progress"\>  
      \<fields\>\["skill\_progression", "completed\_deliverables"\]\</fields\>  
    \</updates\_context\_layer\>  
  \</produced\_context\>  
\</context\_requirements\>

\<menu\>  
  \<item cmd="\*capability\_1" type="workflow"\>Primary Capability Description\</item\>  
  \<item cmd="\*capability\_2" type="action"\>Secondary Capability Description\</item\>  
  \<item cmd="\*capability\_3" type="exec"\>Utility Capability Description\</item\>  
  \<item cmd="\*dismiss"\>\[D\] Dismiss Agent\</item\>  
\</menu\>

\<menu\_handlers\>  
  \<handler type="workflow"\>  
    Load workflow executor. Pass workflow path. Execute with full context.  
  \</handler\>  
  \<handler type="exec"\>  
    Load specified file. Execute instructions. Update context.  
  \</handler\>  
  \<handler type="action"\>  
    Execute prompt block by ID or inline instruction. Update context.  
  \</handler\>  
\</menu\_handlers\>

\<rules\>  
  \<rule priority="critical"\>\[Non-negotiable rule\]\</rule\>  
  \<rule priority="high"\>\[Important guideline\]\</rule\>  
  \<rule priority="standard"\>\[Standard practice\]\</rule\>  
\</rules\>

\<prompts\>  
  \<prompt id="prompt\_identifier"\>  
    \[Reusable instruction content\]  
  \</prompt\>  
\</prompts\>

\</agent\>

\#\#\# 20.2 Workflow Template

\`\`\`markdown  
\---  
workflow\_id: "workflow\_identifier"  
workflow\_name: "Workflow Name"  
workflow\_description: "Complete description of what this accomplishes"  
workflow\_category: "category"  
created\_timestamp: "ISO8601\_UTC"  
last\_modified\_timestamp: "ISO8601\_UTC"  
version: 1  
schema\_version: "1.0.0"  
estimated\_duration\_hours: X  
difficulty\_level: "beginner|intermediate|advanced"  
prerequisites: \["prerequisite\_1", "prerequisite\_2"\]  
\---

\# Workflow Name

\*\*Goal:\*\* \[Clear statement of what this workflow accomplishes\]

\*\*Your Role:\*\* \[Persona agent should embody during execution\]

\---

\#\# Workflow Architecture

\*\*Core Principles:\*\*  
\- Micro-file design: One step per file  
\- Just-in-time loading: Only current step in memory  
\- Sequential enforcement: No skipping or optimizing  
\- State tracking: Progress saved in frontmatter  
\- Append-only building: Documents grow incrementally

\*\*Step Processing Rules:\*\*

1\. \*\*READ COMPLETELY:\*\* Always read entire step before acting  
2\. \*\*FOLLOW SEQUENCE:\*\* Execute sections in order  
3\. \*\*WAIT FOR INPUT:\*\* Halt at menus for user selection  
4\. \*\*CHECK CONTINUATION:\*\* Only proceed when user confirms  
5\. \*\*SAVE STATE:\*\* Update frontmatter before next step  
6\. \*\*LOAD NEXT:\*\* Read next step completely

\*\*CRITICAL RULES (NO EXCEPTIONS):\*\*  
\- 🛑 NEVER load multiple steps simultaneously  
\- 📖 ALWAYS read entire step file first  
\- 🚫 NEVER skip steps or optimize sequence  
\- 💾 ALWAYS update frontmatter  
\- 🎯 ALWAYS follow exact instructions  
\- ⏸️ ALWAYS halt at menus

\---

\#\# Workflow Steps

1\. \*\*\[Step Name\]\*\* (step-01-name.md) \- X hours  
   \- \[Brief description of what this step accomplishes\]  
     
2\. \*\*\[Step Name\]\*\* (step-02-name.md) \- X hours  
   \- \[Brief description\]

\[... list all steps\]

\---

\#\# Initialization Sequence

1\. Load configuration from {config\_path}  
2\. Load user context (profile, goal, progress)  
3\. Initialize workflow state document  
4\. Load and execute step-01

### **20.3 Step Template**

\---  
step\_id: "step-0X-name"  
step\_number: X  
step\_name: "Step Name"  
workflow\_id: "workflow\_identifier"  
dependencies: \["step-0Y-name"\]  \# or \[\] if first step  
completion\_status: "not\_started"  
\---

\# Step X: Step Name

\*\*Objective:\*\* \[One sentence stating what this step achieves\]

\*\*Prerequisites:\*\* \[What must be true before starting, or "None" if first step\]

\---

\#\# Instructions

\*\*Part A: \[First Section Name\]\*\*

\[Specific, actionable instructions for Part A. Include:  
\- What to do  
\- How to do it  
\- What to consider  
\- Common pitfalls to avoid\]

\*\*Part B: \[Second Section Name\]\*\*

\[Specific, actionable instructions for Part B\]

\*\*Part C: \[Third Section Name\]\*\*

\[Specific, actionable instructions for Part C\]

\---

\#\# Outputs

By completing this step, you will have created:

\- \[ \] \[Output 1 \- be specific about artifact name/type\]  
\- \[ \] \[Output 2\]  
\- \[ \] \[Output 3\]

\---

\#\# Validation

Before proceeding to the next step, verify that:

\- \[ \] \[Criterion 1 \- must be objective and checkable\]  
\- \[ \] \[Criterion 2\]  
\- \[ \] \[Criterion 3\]

\---

\#\# Next Step

Once you have completed this step and validated all criteria, you are ready to proceed to:

\*\*Step \[X+1\]: \[Next Step Name\]\*\*

\[Optional: Brief preview of what comes next\]

\---

\*\*Continue?\*\*

\[C\] Continue to next step    
\[R\] Review what I just completed    
\[P\] Pause and save progress for later

---

## **FINAL IMPLEMENTATION CHECKLIST**

When implementing a Shipquick system, verify:

**Architecture:**

* \[ \] sq\_core module with orchestrator, context engine, workflow executor  
* \[ \] Specialized modules for domain capabilities  
* \[ \] Module manifests complete and accurate  
* \[ \] Configuration files present and valid

**Context Management:**

* \[ \] All six context layers implemented  
* \[ \] Schemas defined for each layer  
* \[ \] Context engine handles CRUD operations  
* \[ \] IDs, timestamps, versions on all entities  
* \[ \] Relationships explicit via ID references

**Agents:**

* \[ \] Each agent has complete markdown file  
* \[ \] Personas compelling and distinct  
* \[ \] Context requirements declared  
* \[ \] Menus provide clear capabilities  
* \[ \] Agents load and use context correctly

**Workflows:**

* \[ \] Main workflow files define architecture  
* \[ \] Step files follow template  
* \[ \] Instructions specific and actionable  
* \[ \] Validation criteria clear  
* \[ \] Workflow executor enforces step-file discipline

**Orchestrator:**

* \[ \] Maintains capability awareness via manifests  
* \[ \] Routes contextually based on state  
* \[ \] Monitors progress across workstreams  
* \[ \] Provides proactive suggestions  
* \[ \] Coordinates multi-agent collaboration

**Quality & Feedback:**

* \[ \] Quality standards defined for deliverables  
* \[ \] Assessment criteria with rubrics  
* \[ \] Feedback collection mechanisms  
* \[ \] Continuous improvement process

**Documentation:**

* \[ \] Installation and setup guide  
* \[ \] User guide explaining system usage  
* \[ \] Agent and workflow catalog  
* \[ \] Customization instructions  
* \[ \] Troubleshooting guide

---

## **Security Architecture**

Shipquick systems store sensitive user data including personal profiles, career goals, behavioral patterns, financial constraints, and skill assessments. This section specifies the security architecture required to protect this data.

### **Authentication**

Every interaction with a Shipquick system must be authenticated to ensure only authorized users access their data.

**Authentication Methods:**

```yaml
authentication:
  supported_methods:
    - method: "api_key"
      use_case: "Programmatic access, CI/CD integrations"
      rotation_policy: "Every 90 days"
      
    - method: "session_token"
      use_case: "Interactive user sessions"
      ttl: "24 hours"
      refresh: "Auto-refresh on activity"
      
    - method: "oauth2"
      use_case: "Third-party integrations"
      providers: ["google", "github", "microsoft"]
      scopes: ["profile", "email"]

  session_schema:
    session_id: "SES_[TIMESTAMP]_[UUID]"
    user_profile_id: "USR_..."
    created_timestamp: "ISO8601"
    expires_timestamp: "ISO8601"
    last_activity_timestamp: "ISO8601"
    ip_address: "string"
    user_agent: "string"
    scopes: ["read:context", "write:context", "execute:workflow", "admin:system"]
    
  token_validation:
    on_every_request: true
    check_expiration: true
    check_scope_for_action: true
    log_validation_failures: true
```

### **Authorization**

Different actors in the system have different permission levels.

**Authorization Model:**

```yaml
authorization:
  levels:
    system_admin:
      description: "Full access to all system resources"
      capabilities:
        - "manage_all_users"
        - "access_all_context"
        - "modify_system_config"
        - "view_audit_logs"
      
    user:
      description: "Access to own data only"
      capabilities:
        - "read:own_context"
        - "write:own_context"
        - "execute:own_workflows"
        - "manage:own_agents"
      isolation: "Strict user_profile_id partitioning"
      
    agent:
      description: "Access defined by context_requirements"
      capabilities: "Derived from agent file declarations"
      principle: "Least privilege - only access declared requirements"

  agent_permissions:
    example_design_specialist:
      can_read:
        - "user_profile.design_preferences"
        - "user_profile.portfolio_goals"
        - "session_context.current_workflow"
        - "session_context.observations"
      can_write:
        - "session_context.observations"
        - "session_context.artifacts"
      cannot_access:
        - "user_profile.financial_constraints"
        - "user_profile.career_history"
        - "interaction_history.other_agents"
        
  permission_enforcement:
    check_before_context_load: true
    log_access_attempts: true
    deny_by_default: true
```

### **Data Encryption**

All sensitive data must be encrypted at rest and in transit.

```yaml
encryption:
  at_rest:
    algorithm: "AES-256-GCM"
    key_management: "Per-user encryption keys"
    key_derivation: "PBKDF2 with 100,000 iterations"
    encrypted_fields:
      - "user_profile.email"
      - "user_profile.full_name"
      - "user_profile.career_history"
      - "goal.financial_constraints"
      - "session_context.api_keys"
      
  in_transit:
    protocol: "TLS 1.3"
    certificate_validation: "Required"
    minimum_key_size: 2048
    
  key_rotation:
    frequency: "Annual"
    process: "Re-encrypt with new key, maintain old key for 30 days"
    
  secrets_management:
    llm_api_keys: "Environment variables or secrets manager"
    never_in_context: ["api_keys", "passwords", "tokens"]
    never_in_logs: ["api_keys", "passwords", "tokens", "pii"]
```

### **Audit Logging**

All security-relevant events must be logged for compliance and forensics.

```yaml
audit_logging:
  events_to_log:
    - event_type: "authentication"
      details: ["user_id", "method", "success", "ip_address", "timestamp"]
      
    - event_type: "authorization_failure"
      details: ["user_id", "requested_resource", "required_permission", "timestamp"]
      
    - event_type: "context_access"
      details: ["user_id", "agent_id", "layer_accessed", "fields_accessed", "timestamp"]
      
    - event_type: "data_export"
      details: ["user_id", "export_type", "timestamp"]
      
    - event_type: "data_deletion"
      details: ["user_id", "scope", "timestamp"]
      
  retention:
    security_logs: "2 years"
    access_logs: "1 year"
    
  access:
    who_can_view: ["system_admin"]
    export_format: "JSON"
```

---

## **Error Handling and Recovery**

Shipquick systems must gracefully handle errors and recover from failures without losing user data.

### **Error Classification**

```yaml
error_classification:
  levels:
    recoverable:
      description: "System can retry or use fallback"
      user_impact: "Delayed but not blocked"
      examples:
        - "Temporary network failure"
        - "LLM rate limit exceeded"
        - "Context cache miss"
        
    non_recoverable:
      description: "Requires user intervention or support"
      user_impact: "Blocked, needs help"
      examples:
        - "Invalid workflow definition"
        - "Missing required step file"
        - "Schema validation failure"
        
    critical:
      description: "System must halt safely"
      user_impact: "Session terminated, data preserved"
      examples:
        - "Context engine failure"
        - "Storage write failure"
        - "Security violation detected"
```

### **Error Handling Strategies**

```yaml
error_handling:
  context_load_failure:
    classification: "recoverable"
    retry:
      count: 3
      backoff: "exponential"
      initial_delay_ms: 100
    fallback: "Load from cached context if available"
    user_notification: "Slight delay loading your profile, please wait..."
    logging: "ERROR level with full stack trace"
    
  workflow_step_missing:
    classification: "non_recoverable"
    action: "Halt workflow execution"
    state_preservation: "Save current state before halting"
    user_notification: |
      "We encountered an issue with this workflow. Your progress has been 
      saved at step [X]. Please contact support with error code WF-MISSING-STEP."
    admin_notification: "Alert sent to system administrators"
    
  llm_response_invalid:
    classification: "recoverable"
    retry:
      count: 2
      strategy: "Simplify prompt, request structured output"
    fallback: "Request basic response without complex formatting"
    logging: "Log full request and response for debugging"
    
  llm_rate_limit:
    classification: "recoverable"
    action: "Queue request, notify user of delay"
    user_notification: "High demand - your request is queued. ETA: 30 seconds"
    
  storage_failure:
    classification: "critical"
    action: "Halt session, preserve in-memory state to recovery file"
    user_notification: "System issue detected. Your current work is being saved..."
    recovery: "On next session, offer to restore from recovery file"
```

### **Recovery Mechanisms**

```yaml
recovery:
  auto_save:
    trigger: "After every user action"
    location: "sq_core/recovery/autosave/{user_id}/{session_id}/"
    format: "JSON snapshot of session state"
    retention: "7 days"
    
  checkpoints:
    workflow_checkpoints:
      trigger: "Before each step transition"
      content: "Complete workflow state including context"
      naming: "checkpoint_{workflow_id}_{step_id}_{timestamp}.json"
      
    context_snapshots:
      trigger: "Every 5 minutes during active session"
      content: "All modified context layers"
      retention: "48 hours"
      
  rollback:
    process:
      1: "User requests rollback or system detects corruption"
      2: "Display available checkpoints with timestamps"
      3: "User selects checkpoint to restore"
      4: "Validate checkpoint data integrity"
      5: "Restore state from checkpoint"
      6: "Log rollback event"
    user_consent: "Always required before rollback"
    
  session_recovery:
    on_unexpected_termination:
      1: "Detect incomplete session on next login"
      2: "Offer to resume from last known state"
      3: "Display summary of recovered state"
      4: "User confirms or discards recovery"
```

---

## **LLM Integration Architecture**

This section specifies how Shipquick components integrate with Large Language Models for intelligent behavior.

### **Provider Abstraction**

Shipquick abstracts LLM providers to avoid vendor lock-in and enable flexibility.

```yaml
llm_abstraction:
  interface:
    methods:
      - name: "generate_response"
        params: ["system_prompt", "user_message", "context", "options"]
        returns: "string"
        
      - name: "stream_response"
        params: ["system_prompt", "user_message", "context", "options"]
        returns: "AsyncIterator[string]"
        
      - name: "embed_text"
        params: ["text"]
        returns: "vector[float]"
        
      - name: "count_tokens"
        params: ["text"]
        returns: "integer"
        
  supported_providers:
    openai:
      models: ["gpt-4o", "gpt-4o-mini", "gpt-4-turbo"]
      features: ["streaming", "function_calling", "vision"]
      
    anthropic:
      models: ["claude-sonnet-4-20250514", "claude-3-5-haiku-20241022"]
      features: ["streaming", "extended_thinking"]
      
    local:
      models: ["llama-3.1-70b", "mistral-large"]
      features: ["streaming", "privacy"]
      
  provider_selection:
    default: "Configured in system.config.yaml"
    override: "Per-agent or per-workflow configuration"
    fallback: "If primary fails, try secondary provider"
```

### **Context Injection Strategy**

Managing context within token limits is critical for effective LLM usage.

```yaml
context_injection:
  strategy: "Priority-based context loading"
  
  priority_order:
    1:
      layer: "Agent persona"
      always_loaded: true
      compression: "None - always full"
      typical_tokens: 500-1000
      
    2:
      layer: "Current workflow step instructions"
      always_loaded: true
      compression: "None - always full"
      typical_tokens: 300-800
      
    3:
      layer: "Session context"
      always_loaded: true
      compression: "Summarize observations older than current session"
      typical_tokens: 500-1500
      
    4:
      layer: "User profile"
      loaded: "Relevant fields based on agent requirements"
      compression: "Only declared context_requirements fields"
      typical_tokens: 200-500
      
    5:
      layer: "Goal context"
      loaded: "Summary, not full schema"
      compression: "Primary objective + current milestone only"
      typical_tokens: 200-400
      
    6:
      layer: "Progress context"
      loaded: "Summary only"
      compression: "Completed count + current work items only"
      typical_tokens: 100-300
      
    7:
      layer: "Knowledge graph"
      loaded: "On-demand when agent queries"
      compression: "Relevant subgraph only"
      typical_tokens: 0-1000
      
    8:
      layer: "Interaction history"
      loaded: "Last 5 interactions in current session"
      compression: "Summarize older history"
      typical_tokens: 300-800

  token_management:
    max_context_tokens: 8000
    reserve_for_response: 4000
    overflow_handling:
      1: "Warn in logs"
      2: "Compress lower-priority layers"
      3: "Drop lowest priority layers"
      4: "Summarize remaining context"
```

### **Prompt Construction**

How agent files and context become LLM prompts.

```yaml
prompt_construction:
  system_prompt_structure:
    sections:
      1_persona:
        source: "agent.persona section"
        format: "Verbatim inclusion"
        
      2_context:
        source: "Injected context layers"
        format: "Structured YAML blocks"
        
      3_rules:
        source: "agent.rules section"
        format: "Numbered list"
        
      4_current_task:
        source: "Workflow step or user request"
        format: "Clear instruction block"
        
  example_assembled_prompt: |
    # PERSONA
    You are [agent name], [agent title].
    
    [Identity narrative from agent file]
    
    [Communication style from agent file]
    
    # PRINCIPLES
    1. [Principle 1]
    2. [Principle 2]
    ...
    
    # CONTEXT
    ## User Profile
    - Name: {preferred_name}
    - Skill levels: {relevant skills}
    
    ## Current Goal
    - Objective: {primary_objective}
    - Current milestone: {milestone_name}
    
    ## Session Context
    - Current workflow: {workflow_name}
    - Current step: {step_name}
    - Recent observations: {observations}
    
    # CURRENT TASK
    [Step instructions or user request]
    
    # RULES
    - Always stay in character
    - Never skip workflow steps
    - Update context after observations
```

### **Cost Management**

```yaml
cost_management:
  limits:
    daily_token_limit: 100000
    per_session_limit: 20000
    per_workflow_estimate: "Calculate before starting"
    
  optimization:
    use_smaller_model_for:
      - "Simple confirmations"
      - "Menu selections"
      - "Status updates"
      - "Formatting tasks"
      
    use_larger_model_for:
      - "Creative writing"
      - "Code generation"
      - "Complex reasoning"
      - "Quality assessment"
      
  monitoring:
    track: ["tokens_used", "cost_per_session", "cost_per_workflow"]
    alert_threshold: "80% of daily limit"
    
  user_transparency:
    show_token_usage: "Optional in settings"
    explain_model_selection: "On request"
```

---

## **Testing Framework**

Comprehensive testing ensures Shipquick systems work correctly and remain stable through changes.

### **Testing Levels**

```yaml
testing_levels:
  unit_tests:
    scope: "Individual functions and components"
    examples:
      - "ID generation produces valid format"
      - "Timestamp parsing handles edge cases"
      - "YAML schema validation catches errors"
    tools: "pytest, jest, or equivalent"
    coverage_target: "90%"
    
  component_tests:
    scope: "Single layer or module"
    examples:
      - "Context engine CRUD operations"
      - "Workflow state management"
      - "Agent file parsing"
    mocking: "Mock LLM responses, file system"
    
  agent_tests:
    scope: "Agent behavior validation"
    test_types:
      persona_consistency:
        method: "Scripted conversations"
        validation: "Responses match communication style"
        
      context_access:
        method: "Mock context with known values"
        validation: "Agent references correct context"
        
      handoff_behavior:
        method: "Trigger handoff scenarios"
        validation: "Handoff document complete and accurate"
        
  workflow_tests:
    scope: "End-to-end workflow execution"
    test_types:
      happy_path:
        method: "Execute all steps with valid inputs"
        validation: "All steps complete, outputs match expected"
        
      error_path:
        method: "Inject failures at each step"
        validation: "Graceful handling, state preserved"
        
      resume_path:
        method: "Pause and resume workflow"
        validation: "Correct state restored, continue works"
        
  integration_tests:
    scope: "Multi-component interactions"
    test_types:
      - "Orchestrator routes to correct agents"
      - "Agent handoffs preserve context"
      - "Party mode agents interact correctly"
      - "Cross-module workflows execute"
      
  meta_system_tests:
    scope: "System generation"
    test_types:
      - "Generated systems validate against schema"
      - "Generated agents are parseable"
      - "Generated workflows have all step files"
      - "Generated system boots successfully"
```

### **Test Data Management**

```yaml
test_data:
  location: "sq_core/tests/fixtures/"
  
  fixtures:
    sample_user_profiles:
      - "beginner_user.yaml"
      - "advanced_user.yaml"
      - "edge_case_user.yaml"
      
    sample_goals:
      - "career_transition.yaml"
      - "skill_development.yaml"
      - "creative_project.yaml"
      
    sample_workflows:
      - "simple_3_step.yaml"
      - "complex_branching.yaml"
      - "error_inducing.yaml"
      
  mock_llm_responses:
    location: "sq_core/tests/mocks/llm/"
    format: "Request hash -> response mapping"
    
  isolation:
    test_database: "Separate from production"
    cleanup: "Reset after each test suite"
```

### **Continuous Integration**

```yaml
ci_integration:
  triggers:
    - "On every pull request"
    - "On merge to main branch"
    - "Nightly full test suite"
    
  pipeline:
    stages:
      1_lint:
        - "YAML schema validation"
        - "Markdown format checking"
        - "Code style enforcement"
        
      2_unit_tests:
        - "Run all unit tests"
        - "Require 90% pass rate"
        
      3_component_tests:
        - "Run component tests"
        - "Generate coverage report"
        
      4_integration_tests:
        - "Run integration tests"
        - "Only on main branch merges"
        
  reporting:
    format: "JUnit XML"
    coverage_tool: "Coverage.py or equivalent"
    failure_notification: "Slack, email to author"
```

---

## **Scalability Architecture**

As Shipquick systems grow in users and data, scalability considerations become critical.

### **Data Management at Scale**

```yaml
data_management:
  archival_policy:
    trigger_conditions:
      - "Goal marked completed for 30 days"
      - "No session activity for 180 days"
      
    process:
      1: "Notify user of pending archival"
      2: "Compress context layers"
      3: "Move to cold storage"
      4: "Maintain index for retrieval"
      
    retrieval: "User request restores to active storage"
    retention: "5 years in archive"
    
  context_pruning:
    interaction_history:
      retain: "Last 1000 interactions per goal"
      older: "Summarize and compress"
      
    session_context:
      retain: "Last 30 days active"
      older: "Archive to goal history"
      
    knowledge_graph:
      maintenance: "Quarterly consolidation"
      actions:
        - "Merge duplicate nodes"
        - "Remove orphaned edges"
        - "Recalculate importance scores"
        
  storage_limits:
    per_user:
      active_storage: "500MB"
      archived_storage: "5GB"
      warning_threshold: "80%"
      
    per_goal:
      context_limit: "50MB"
      artifact_limit: "200MB"
```

### **Performance Optimization**

```yaml
performance:
  caching:
    what_to_cache:
      - "User profile (frequently accessed)"
      - "Active goal context"
      - "Current workflow state"
      - "Agent manifests"
      
    strategy: "In-memory LRU cache"
    ttl: "Session duration or 15 minutes idle"
    invalidation: "On write to cached entity"
    
  lazy_loading:
    knowledge_graph: "Load on first query, not at activation"
    interaction_history: "Load last 10, paginate rest"
    deliverable_artifacts: "Load metadata only, content on demand"
    
  async_operations:
    context_persistence: "Background write with confirmation"
    observation_propagation: "Queue-based processing"
    quality_assessment: "Non-blocking, notify on completion"
    
  indexing:
    required_indices:
      - field: "user_profile_id"
        on: "All context layers"
      - field: "goal_id"
        on: "progress, session, workflow_state"
      - field: "created_timestamp"
        on: "All entities"
      - field: "node_name"
        on: "knowledge_graph.nodes"
```

### **Multi-Tenancy**

```yaml
multi_tenancy:
  isolation:
    level: "Strict user_profile_id partitioning"
    enforcement: "Query-level filtering, cannot be bypassed"
    validation: "Every data access checks user ownership"
    
  resource_limits:
    per_user:
      active_storage: "500MB"
      concurrent_sessions: 3
      workflows_per_goal: 50
      agents_per_system: 20
      daily_tokens: 100000
      
    enforcement:
      soft_limit: "Warning at 80%"
      hard_limit: "Block new creation at 100%"
      
  fair_scheduling:
    llm_requests: "Round-robin across users"
    background_jobs: "Priority queue with user fairness"
```

---

## **Schema Versioning and Migration**

As Shipquick evolves, schemas will change. This section specifies how to handle versioning and migration.

### **Versioning Strategy**

```yaml
versioning:
  semantic_versioning:
    major: "Breaking changes requiring data migration"
    minor: "Additive changes, backward compatible"
    patch: "Bug fixes, no schema change"
    
  compatibility_rules:
    readers:
      - "Must handle current version"
      - "Must handle one previous major version"
      - "Should gracefully degrade for unknown versions"
      
    writers:
      - "Always write current version"
      - "Update schema_version field on every write"
      
  version_detection:
    on_load: "Check schema_version field"
    mismatch_handling: "Trigger migration if needed"
```

### **Migration Process**

```yaml
migration:
  process:
    1_detect:
      trigger: "Version mismatch on data load"
      action: "Identify current and target versions"
      
    2_backup:
      action: "Create backup of current data"
      location: "sq_core/backups/{timestamp}/"
      
    3_plan:
      action: "Determine migration path"
      example: "1.0.0 → 1.1.0 → 1.2.0 → 2.0.0"
      
    4_execute:
      action: "Apply migration scripts sequentially"
      transaction: "All-or-nothing per entity"
      
    5_validate:
      action: "Validate migrated data against new schema"
      rollback_on_failure: true
      
    6_finalize:
      action: "Update schema_version, clean up"

  migration_scripts:
    location: "sq_core/migrations/"
    naming: "{from_version}_to_{to_version}.py"
    
    structure: |
      def can_migrate(data):
          return data.get('schema_version') == '1.0.0'
          
      def migrate(data):
          # Transform data
          data['new_field'] = compute_new_field(data)
          data['schema_version'] = '1.1.0'
          return data
          
      def validate(data):
          return schema_1_1_0.validate(data)
          
  rollback:
    automatic: "If validation fails"
    manual: "User command to restore from backup"
    retention: "Backups kept for 30 days"
```

### **Example Migration**

```yaml
example_migration:
  from_version: "1.0.0"
  to_version: "1.1.0"
  
  changes:
    - type: "field_added"
      layer: "user_profile"
      field: "accessibility_preferences"
      default: {}
      
    - type: "field_renamed"
      layer: "goal"
      old_name: "timeline"
      new_name: "schedule"
      
    - type: "field_type_changed"
      layer: "progress"
      field: "completion_percentage"
      old_type: "string"
      new_type: "integer"
      conversion: "Parse as integer, default 0"
      
  script: |
    def migrate(data):
        # Add new field with default
        data['accessibility_preferences'] = {}
        
        # Rename field
        if 'timeline' in data:
            data['schedule'] = data.pop('timeline')
            
        # Convert type
        if 'completion_percentage' in data:
            try:
                data['completion_percentage'] = int(data['completion_percentage'])
            except ValueError:
                data['completion_percentage'] = 0
                
        data['schema_version'] = '1.1.0'
        return data
```

---

## **Observability and Monitoring**

Production Shipquick systems require comprehensive observability.

### **Metrics Collection**

```yaml
metrics:
  system_metrics:
    - name: "active_sessions"
      type: "gauge"
      description: "Current number of active user sessions"
      
    - name: "context_load_latency_ms"
      type: "histogram"
      description: "Time to load context layers"
      buckets: [10, 50, 100, 500, 1000, 5000]
      
    - name: "workflow_step_duration_seconds"
      type: "histogram"
      description: "Time spent on each workflow step"
      
    - name: "llm_request_count"
      type: "counter"
      labels: ["provider", "model", "agent_id"]
      
    - name: "llm_tokens_used"
      type: "counter"
      labels: ["provider", "model", "direction"]
      
    - name: "error_count"
      type: "counter"
      labels: ["error_type", "severity", "component"]
      
  business_metrics:
    - name: "goals_created"
      type: "counter"
      
    - name: "goals_completed"
      type: "counter"
      
    - name: "workflow_completion_rate"
      type: "gauge"
      calculation: "completed / started"
      
    - name: "average_quality_score"
      type: "gauge"
      
    - name: "user_session_duration_minutes"
      type: "histogram"
```

### **Health Checks**

```yaml
health_checks:
  endpoints:
    /health:
      description: "Overall system health"
      returns: "200 OK or 503 Service Unavailable"
      
    /health/context_engine:
      check: "Can read/write to context storage"
      timeout: 5s
      
    /health/llm_provider:
      check: "LLM API responds to ping"
      timeout: 10s
      
    /health/storage:
      check: "File system or database accessible"
      timeout: 5s
      
  frequency: "Every 60 seconds"
  
  failure_handling:
    consecutive_failures: 3
    action: "Mark component unhealthy, alert"
```

### **Alerting**

```yaml
alerting:
  rules:
    - name: "High Error Rate"
      condition: "error_rate > 5% over 5 minutes"
      severity: "critical"
      action: "Page on-call"
      
    - name: "Slow Context Loading"
      condition: "p99 context_load_latency > 5000ms"
      severity: "warning"
      action: "Notification to team channel"
      
    - name: "LLM Quota Approaching"
      condition: "daily_tokens > 80% of limit"
      severity: "info"
      action: "Email to admin"
      
    - name: "Storage Near Capacity"
      condition: "storage_used > 90%"
      severity: "warning"
      action: "Notification + auto-archive trigger"
      
  channels:
    critical: ["pagerduty", "slack_urgent"]
    warning: ["slack_alerts", "email"]
    info: ["slack_info"]
```

### **Distributed Tracing**

```yaml
tracing:
  correlation:
    header: "X-Correlation-ID"
    format: "TRACE_{timestamp}_{uuid}"
    propagation: "Through all agent handoffs and service calls"
    
  spans:
    - name: "session_start"
      attributes: ["user_id", "session_id"]
      
    - name: "agent_activation"
      attributes: ["agent_id", "activation_duration_ms"]
      
    - name: "workflow_step"
      attributes: ["workflow_id", "step_id", "duration_ms"]
      
    - name: "llm_request"
      attributes: ["provider", "model", "tokens_in", "tokens_out", "latency_ms"]
      
    - name: "context_operation"
      attributes: ["layer", "operation", "duration_ms"]
      
  retention:
    detailed: "7 days"
    aggregated: "90 days"
    
  sampling:
    rate: "10% normal, 100% on error"
```

---

## **Data Portability**

Users must be able to export their data and request deletion.

### **Data Export**

```yaml
data_export:
  formats:
    full_export:
      format: "ZIP archive containing JSON files"
      includes:
        - "user_profile.json"
        - "goals/*.json"
        - "progress/*.json"
        - "deliverables/*.json"
        - "knowledge_graph.json"
        - "workflow_history.json"
        - "artifacts/*"
      
    selective_export:
      options:
        - "Single goal with all related data"
        - "Deliverables only"
        - "Knowledge graph only"
        
    human_readable:
      format: "Markdown report"
      includes: "Summary of journey, achievements, learnings"
      
  process:
    1: "User requests export via orchestrator"
    2: "System generates export package (async)"
    3: "User notified when ready"
    4: "Download link valid for 7 days"
    
  sanitization:
    remove:
      - "Internal system IDs (replace with readable names)"
      - "Agent file references"
      - "Raw LLM interaction logs"
    preserve:
      - "All user-created content"
      - "All assessments and feedback"
      - "All timestamp information"
```

### **Data Deletion**

```yaml
data_deletion:
  right_to_deletion:
    compliance: ["GDPR Article 17", "CCPA"]
    
  process:
    1: "User requests deletion via orchestrator"
    2: "System shows deletion preview (what will be deleted)"
    3: "User confirms with explicit acknowledgment"
    4: "Grace period: 7 days to cancel"
    5: "Permanent deletion executed"
    6: "Confirmation receipt provided"
    
  scope:
    deleted:
      - "user_profile"
      - "All goals"
      - "All progress records"
      - "All sessions"
      - "All knowledge graph entries"
      - "All interaction history"
      - "All artifacts and deliverables"
      
    retained:
      - "Anonymized aggregate metrics (no user identification)"
      - "System logs (purged after 30 days)"
      
  verification:
    method: "Scan all storage for user_profile_id references"
    confirmation: "Zero references found"
```

---

## **Concurrency Management**

Handling multiple simultaneous sessions and operations safely.

### **Concurrency Model**

```yaml
concurrency:
  strategy: "Optimistic locking with version-based conflict detection"
  
  session_management:
    max_concurrent_sessions: 3
    session_awareness: true
    
    conflict_scenarios:
      same_user_multiple_tabs:
        handling: "Last-write-wins with merge attempt"
        notification: "Inform user in other tabs"
        
      same_user_multiple_devices:
        handling: "Sync on next action"
        notification: "Show 'updated elsewhere' indicator"
```

### **Version-Based Locking**

```yaml
locking:
  mechanism: "Optimistic locking using version field"
  
  read_process:
    1: "Read entity with current version number"
    2: "Use data in session"
    3: "Track version for later write"
    
  write_process:
    1: "Check current version matches expected"
    2: "If match: Write new data, increment version"
    3: "If mismatch: Conflict detected"
    
  conflict_resolution:
    detection: "Version mismatch on write attempt"
    
    strategies:
      last_write_wins:
        use_when: "Low-criticality data, user preference"
        action: "Overwrite with newer data"
        
      merge:
        use_when: "Structured data with independent fields"
        action: "Combine changes from both versions"
        rules:
          arrays: "Union of elements (preserve both)"
          scalars: "Use later timestamp value"
          objects: "Recursive merge"
          
      user_resolution:
        use_when: "Critical data, significant conflict"
        action: "Present both versions to user for decision"
        
    notification:
      inform_user: "Your changes were merged with updates from another session"
      show_diff: "Optional, in settings"
```

### **Example Conflict Resolution**

```yaml
example_conflict:
  scenario: "User has two browser tabs open"
  
  tab_a_action:
    field: "user_profile.preferred_name"
    change: "Alex" -> "Alexandra"
    timestamp: "2026-01-10T22:00:00Z"
    
  tab_b_action:
    field: "user_profile.timezone"
    change: "UTC" -> "America/New_York"
    timestamp: "2026-01-10T22:00:05Z"
    
  resolution:
    strategy: "merge"
    result:
      preferred_name: "Alexandra"  # From Tab A
      timezone: "America/New_York"  # From Tab B
    notification: "Your profile was updated. Merged changes from another session."
```

---

## **Implementation Roadmap**

This section provides a phased approach to implementing Shipquick.

### **Phase 1: Minimum Viable System**

```yaml
phase_1:
  name: "Core Foundation"
  duration: "4-6 weeks"
  goal: "Single agent executes single workflow with context persistence"
  
  scope:
    - "One specialist agent (fully functional)"
    - "User profile context layer"
    - "Session context layer"
    - "Single workflow with 5-7 steps"
    - "File-based persistence (JSON/YAML files)"
    - "Single LLM provider integration (OpenAI)"
    - "Basic error handling"
    
  out_of_scope:
    - "Orchestrator"
    - "Multi-agent handoffs"
    - "Knowledge graph"
    - "Quality assessment"
    - "Meta-system"
    
  deliverables:
    - "Working agent file (complete template)"
    - "Working workflow with all step files"
    - "Context loading and saving"
    - "Basic CLI or chat interface"
    
  success_criteria:
    - "User can complete workflow start to finish"
    - "Context persists across sessions"
    - "Workflow can be resumed after pause"
```

### **Phase 2: Multi-Agent Foundation**

```yaml
phase_2:
  name: "Multi-Agent System"
  duration: "4 weeks"
  prerequisites: "Phase 1 complete"
  goal: "Multiple agents collaborate with orchestrator coordination"
  
  scope:
    - "Orchestrator with basic routing"
    - "3-4 specialist agents"
    - "Agent handoff protocol"
    - "All 6 context layers"
    - "Workflow state management"
    - "Progress tracking layer"
    
  deliverables:
    - "Working orchestrator"
    - "Multiple agents with handoffs"
    - "Complete context layer implementation"
    - "Agent manifests"
    
  success_criteria:
    - "User can switch between agents via orchestrator"
    - "Handoffs preserve context"
    - "Progress tracked across workflows"
```

### **Phase 3: Meta-System**

```yaml
phase_3:
  name: "System Generation"
  duration: "6 weeks"
  prerequisites: "Phase 2 complete"
  goal: "Generate complete systems from goal analysis"
  
  scope:
    - "Goal analysis workflow"
    - "Agent team generation"
    - "Workflow generation"
    - "System validation"
    - "Templates and patterns library"
    
  deliverables:
    - "Meta-system workflow"
    - "Generation templates"
    - "Validation suite"
    - "Example generated systems"
    
  success_criteria:
    - "Can generate working system from goal description"
    - "Generated systems pass validation"
    - "Generated systems are usable"
```

### **Phase 4: Production Readiness**

```yaml
phase_4:
  name: "Production Hardening"
  duration: "4 weeks"
  prerequisites: "Phase 3 complete"
  goal: "System ready for real users"
  
  scope:
    - "Security implementation"
    - "Error handling and recovery"
    - "Monitoring and alerting"
    - "Data export and deletion"
    - "Performance optimization"
    - "Documentation completion"
    
  deliverables:
    - "Authentication/authorization system"
    - "Comprehensive error handling"
    - "Monitoring dashboards"
    - "User documentation"
    - "Operations runbooks"
    
  success_criteria:
    - "Security audit passes"
    - "Error recovery tested"
    - "Performance benchmarks met"
    - "Documentation complete"
```

### **Technology Stack Recommendations**

```yaml
technology_stack:
  runtime:
    recommended: "Python 3.11+"
    alternative: "Node.js 20+ with TypeScript"
    rationale: "Rich ecosystem for LLM tools, data processing"
    
  storage:
    development: "SQLite or JSON files"
    production_small: "PostgreSQL"
    production_large: "PostgreSQL + Redis cache"
    
  llm_integration:
    recommended: "LiteLLM (multi-provider abstraction)"
    alternative: "LangChain"
    rationale: "Provider flexibility, consistent interface"
    
  configuration:
    format: "YAML with JSON Schema validation"
    validation: "Pydantic (Python) or Zod (TypeScript)"
    
  testing:
    unit: "pytest or jest"
    integration: "pytest with fixtures"
    e2e: "Custom test harness with mock LLM"
    
  observability:
    metrics: "Prometheus + Grafana"
    logging: "Structured JSON logs"
    tracing: "OpenTelemetry"
```

---

## **31. Persistent Planning Pattern**

### **Overview**

This section defines the persistent planning discipline that ensures AI agents maintain state across context resets. The core insight: treat the filesystem as persistent memory while the context window is volatile RAM.

**The Core Principle:**
```
Context Window = RAM (volatile, limited)
Filesystem = Disk (persistent, unlimited)
→ Anything important gets written to disk immediately.
```

### **The Problem This Solves**

Traditional AI agents suffer from:

| Problem | Description | Impact |
|---------|-------------|--------|
| **Volatile Memory** | Context resets lose all progress | Work gets repeated |
| **Goal Drift** | After 50+ tool calls, original goals get forgotten | Tasks go off-track |
| **Hidden Errors** | Failures aren't tracked | Same mistakes repeat |
| **Context Stuffing** | Everything crammed into context | Context overflow, degraded performance |

### **The 3-File Pattern**

For every complex task, create THREE persistent files:

```yaml
persistent_planning_files:
  task_plan:
    filename: "task_plan.md"
    purpose: "Track phases, goals, current status, and completion criteria"
    template: |
      # Task Plan: {task_name}
      
      ## Goal
      {clear objective statement}
      
      ## Phases
      - [ ] Phase 1: {description}
      - [/] Phase 2: {description}  # [/] = in progress
      - [ ] Phase 3: {description}
      
      ## Current Status
      Working on: {current phase/step}
      Last updated: {timestamp}
      
      ## Completion Criteria
      - [ ] Criterion 1
      - [ ] Criterion 2
      
      ## Notes
      {important context to remember}
  
  findings:
    filename: "findings.md"
    purpose: "Store research, discoveries, and important information"
    template: |
      # Findings: {task_name}
      
      ## Research Results
      {organized findings from research}
      
      ## Key Discoveries
      - {discovery 1}
      - {discovery 2}
      
      ## Data Collected
      {structured data}
      
      ## Sources
      - {source 1}
      - {source 2}
  
  progress:
    filename: "progress.md"
    purpose: "Session log, test results, error tracking"
    template: |
      # Progress Log: {task_name}
      
      ## Session Log
      
      ### {timestamp}
      - Action: {what was done}
      - Result: {outcome}
      - Next: {what's next}
      
      ## Test Results
      - Test 1: ✅ Passed / ❌ Failed
      - Test 2: ✅ Passed / ❌ Failed
      
      ## Errors Encountered
      | Error | Cause | Resolution |
      |-------|-------|------------|
      | {error} | {cause} | {how fixed} |
```

### **Key Rules for Persistent Planning**

```yaml
planning_rules:
  rule_1_plan_first:
    description: "NEVER start complex work without creating task_plan.md"
    enforcement: "Workflow step-01 must always create/load plan file"
    
  rule_2_two_action_rule:
    description: "Save findings after every 2 view/browse/research operations"
    implementation: |
      after_actions_count: 2
      trigger: "write_to_findings_file"
      reason: "Prevents loss of research if context resets"
    
  rule_3_log_all_errors:
    description: "Every error encountered must be logged to progress.md"
    purpose: "Enables learning from failures, prevents repetition"
    format: |
      ## Error: {error_type}
      - When: {timestamp}
      - What happened: {description}
      - Attempted fix: {what was tried}
      - Resolution: {what worked}
      
  rule_4_never_repeat_failures:
    description: "Check error log before attempting approaches"
    implementation: |
      before_action:
        - load: progress.md
        - check: errors_section
        - if_similar_attempted: mutate_approach
        
  rule_5_reread_before_decisions:
    description: "Re-read plan before any major decision"
    triggers:
      - before_phase_change
      - before_major_action
      - every_10_tool_calls
```

### **Context Engineering Principles**

These principles optimize context handling for agentic systems:

```yaml
context_engineering:
  
  design_around_kv_cache:
    principle: "Structure prompts for KV-cache efficiency"
    implementation:
      - keep_stable_prefix: "System prompt + persona should rarely change"
      - append_only: "Add new context at end, don't restructure"
      - batch_context_loads: "Load related context together"
  
  mask_dont_remove:
    principle: "Hide irrelevant tools/options rather than removing"
    implementation:
      - dynamic_tool_hiding: "Show only relevant tools for current phase"
      - state_machine: "Tools available depend on current state"
      - benefit: "Maintains model's understanding while reducing noise"
  
  filesystem_as_context:
    principle: "Use files as extended 'neural memory'"
    implementation:
      - scratchpads: "Markdown files for working memory"
      - checkpoints: "Regular saves of progress state"
      - knowledge_persistence: "Findings survive context resets"
  
  keep_wrong_stuff_in:
    principle: "Don't immediately delete failed attempts"
    implementation:
      - log_failures: "Record what didn't work and why"
      - maintain_history: "Keep error traces for learning"
      - benefit: "Model learns from mistakes, avoids repetition"
  
  dont_get_few_shotted:
    principle: "Avoid over-fitting to recent examples in context"
    implementation:
      - balance_examples: "Mix recent and diverse examples"
      - explicit_instructions: "State rules explicitly, don't rely on examples alone"
      - variation: "Use different phrasings for similar instructions"
```

### **Integration with Shipquick Architecture**

Map to existing Shipquick context layers:

```yaml
planning_pattern_integration:
  
  task_plan_md:
    maps_to: "session_context + goal_context"
    contains:
      - current_objective (goal_context)
      - session_state (session_context)
      - phase_tracking (progress_state)
    when_to_create: "On workflow start or complex task initiation"
    
  findings_md:
    maps_to: "knowledge_graph + interaction_history"
    contains:
      - discovered_facts (knowledge_graph.nodes)
      - research_results (knowledge_graph.facts)
      - important_learnings (interaction_history.insights)
    when_to_update: "After every 2 research/view operations"
    
  progress_md:
    maps_to: "progress_state + session_context"
    contains:
      - session_log (session_context.recent_actions)
      - test_results (progress_state.validation)
      - error_tracking (progress_state.issues)
    when_to_update: "After every significant action or error"
```

### **Implementation Hooks**

```yaml
workflow_hooks:
  
  pre_tool_use:
    trigger: "Before any tool execution"
    action: "Re-read task_plan.md if 10+ tools since last read"
    purpose: "Prevent goal drift"
    
  post_tool_use:
    trigger: "After file write or significant action"
    action: "Prompt to update progress.md status"
    purpose: "Maintain accurate progress tracking"
    
  post_research:
    trigger: "After 2 view/browse/fetch operations"
    action: "Force write to findings.md"
    purpose: "2-action rule enforcement"
    
  pre_stop:
    trigger: "Before completing/stopping workflow"
    action: |
      - verify_completion_criteria against task_plan.md
      - if incomplete, prompt continuation or explicit stop reason
    purpose: "Prevent premature completion"
```

### **When to Use This Pattern**

```yaml
usage_guidelines:
  
  use_for:
    - multi_step_tasks: "3+ distinct steps"
    - research_tasks: "Gathering and analyzing information"
    - building_tasks: "Creating projects or documents"
    - long_running: "Tasks spanning many tool calls (20+)"
    - complex_debugging: "Multi-step troubleshooting"
    
  skip_for:
    - simple_questions: "Quick Q&A"
    - single_file_edits: "One file, obvious change"
    - quick_lookups: "Simple information retrieval"
    - trivial_actions: "< 3 steps total"
```

### **Example: Complete Planning Session**

```markdown
# Example: Creating a New Agent

## task_plan.md
# Task Plan: Create Analytics Agent

## Goal
Create a specialized agent for data analytics with persona, workflows, and tests.

## Phases
- [x] Phase 1: Research existing agent patterns
- [x] Phase 2: Design agent persona and capabilities
- [/] Phase 3: Create agent YAML file
- [ ] Phase 4: Create supporting workflows
- [ ] Phase 5: Write tests
- [ ] Phase 6: Validate and document

## Current Status
Working on: Phase 3 - Writing agent YAML
Last updated: 2026-01-12T03:30:00

## Completion Criteria
- [ ] Agent YAML valid and complete
- [ ] At least 2 workflows created
- [ ] Unit tests passing
- [ ] Documentation written

## Notes
- Using data-analyst pattern from examples
- Need integration with pandas and SQL tools
- Security review required before deployment

---

## findings.md
# Findings: Create Analytics Agent

## Research Results
- Found 3 relevant agent patterns in module library
- Data analyst pattern most applicable
- Key tools needed: sql_query, dataframe_analyze, chart_generate

## Key Discoveries
- Agents with tool_integration context require explicit permissions
- Persona should emphasize precision and data integrity
- Workflow should include validation step before output

---

## progress.md
# Progress Log: Create Analytics Agent

## Session Log

### 2026-01-12 03:00
- Action: Reviewed existing agent patterns
- Result: Found data-analyst pattern template
- Next: Adapt for analytics use case

### 2026-01-12 03:15
- Action: Drafted persona section
- Result: Created analytical, precise persona
- Next: Define context requirements

## Errors Encountered
| Error | Cause | Resolution |
|-------|-------|------------|
| Invalid YAML | Missing quotes around description | Added quotes |

## Test Results
- YAML validation: ✅ Passed
- Persona coherence: ✅ Passed
- Tool integration: 🔄 In Progress
```

---

## **CLOSING NOTES FOR IMPLEMENTERS**

You have now received the complete Shipquick architectural specification. This document contains everything needed to implement a sophisticated meta-agentic system that can generate customized multi-agent AI systems for any business goal.

**Key takeaways:**

1. **Everything must be tracked with IDs, timestamps, and versions** \- This is not optional

2. **Context is the foundation of intelligence** \- Rigorous context management enables all sophisticated capabilities

3. **Step-file architecture prevents hallucination** \- Just-in-time loading and sequential enforcement maintain discipline

4. **Hyper-specialization beats generalization** \- Deep expertise in narrow domains produces better results

5. **The meta-system is the differentiator** \- Ability to generate complete systems from goal analysis is Shipquick's superpower

6. **Quality comes from explicit standards** \- Define what good looks like and assess against it

7. **Continuous improvement drives evolution** \- Feedback loops make systems better over time

**Your implementation should:**

* Follow the specifications exactly, especially data persistence rules  
* Generate actual working files, not just descriptions  
* Enforce step-file discipline without exception  
* Maintain six-layer context architecture  
* Create compelling agent personas  
* Design effective workflows  
* Build intelligent orchestrator  
* Enable meta-system capability

**Remember:**

* Read this document thoroughly multiple times  
* Reference relevant sections during implementation  
* Follow templates provided  
* Test each component thoroughly  
* Validate entire system before delivery  
* Document any deviations from spec

**Good luck building Shipquick\! This system has the potential to transform how humans work with AI agents to achieve complex long-term objectives.**

---

## **Reference Implementation: shipquick-enterprise**

The `shipquick-enterprise` module serves as the canonical reference implementation demonstrating all architectural principles in this document. This section documents the complete implementation with specific examples.

### **Module Statistics**

| Metric | Count |
|--------|-------|
| Total Files | 59 |
| Agents | 7 |
| Workflows | 7 (25 step files) |
| Tasks | 5 |
| Schemas | 6 |
| Manifest Files | 4 |

### **Agent Roster**

| Agent ID | Name | Icon | Type | Purpose |
|----------|------|------|------|---------|
| AGT_SHIPQUICK_MASTER_001 | Shipquick Master | 🧙 | orchestrator | Master routing and user interaction |
| AGT_PROMPT_ENGINEER_001 | Prompt Engineer | 📝 | specialist | Prompt creation and optimization |
| AGT_CONTEXT_ARCHITECT_001 | Context Architect | 🧠 | specialist | 6-layer context system design |
| AGT_AGENT_BUILDER_001 | Agent Builder | 🤖 | specialist | Agent definition creation |
| AGT_WORKFLOW_DESIGNER_001 | Workflow Designer | 🔄 | specialist | Step-file workflow design |
| AGT_SECURITY_GUARDIAN_001 | Security Guardian | 🔒 | specialist | Security audits and compliance |
| AGT_LLM_SPECIALIST_001 | LLM Specialist | 🤖 | specialist | LLM provider integration |

### **Workflow Roster**

| Workflow ID | Name | Steps | Assigned Agent |
|-------------|------|-------|----------------|
| WF_CREATE_AGENT_001 | Create Agent | 5 | agent-builder |
| WF_CREATE_WORKFLOW_001 | Create Workflow | 5 | workflow-designer |
| WF_CREATE_CONTEXT_001 | Create Context Layer | 3 | context-architect |
| WF_SECURITY_REVIEW_001 | Security Review | 4 | security-guardian |
| WF_LLM_INTEGRATION_001 | LLM Integration | 3 | llm-specialist |
| WF_IMPROVE_PROMPT_001 | Improve Prompt | 2 | prompt-engineer |
| WF_CREATE_SYSTEM_PROMPT_001 | Create System Prompt | 3 | prompt-engineer |

### **File Structure**

```
shipquick-enterprise/
├── config.yaml                    # Module configuration
├── README.md                      # Module documentation
├── observations.md                # ODEV learning tracker
├── agents/
│   ├── shipquick-master.md        # Orchestrator
│   ├── prompt-engineer.md
│   ├── context-architect.md
│   ├── agent-builder.md
│   ├── workflow-designer.md
│   ├── security-guardian.md
│   └── llm-integration-specialist.md
├── workflows/
│   ├── create-agent/
│   │   ├── workflow.md
│   │   └── steps/
│   │       ├── step-01-init.md
│   │       ├── step-02-persona.md
│   │       ├── step-03-context.md
│   │       ├── step-04-menu.md
│   │       └── step-05-validate.md
│   ├── create-workflow/           # 5 steps
│   ├── create-context-layer/      # 3 steps
│   ├── security-review/           # 4 steps
│   ├── llm-integration/           # 3 steps
│   ├── improve-prompt/            # 2 steps
│   └── create-system-prompt/      # 3 steps
├── tasks/
│   ├── validate-agent.md
│   ├── validate-workflow.md
│   ├── validate-context.md
│   ├── estimate-tokens.md
│   └── export-config.md
├── schemas/
│   ├── user-profile.schema.yaml
│   ├── goal-context.schema.yaml
│   ├── progress-state.schema.yaml
│   ├── session-context.schema.yaml
│   ├── knowledge-graph.schema.yaml
│   └── interaction-history.schema.yaml
├── templates/
│   └── agent.template.md          # v2.0 enhanced template
└── config/
    ├── agent-manifest.csv
    ├── workflow-manifest.csv
    ├── task-manifest.csv
    └── schema-manifest.csv
```

### **ODEV Observations Applied**

During module development, 9 observations were identified through benchmarking and embedded via the ODEV cycle:

| # | Observation | Source | Locations Updated |
|---|-------------|--------|-------------------|
| 1 | Todo placeholder pattern | Benchmark vs BMAD | Arch, Template, Checklists ×2 |
| 2 | Menu exec paths required | Benchmark vs BMAD | Arch, Template, Checklists ×2, Agents ×7 |
| 3 | Data handler type | Benchmark vs BMAD | Arch, Template, Checklists ×2 |
| 4 | Project-context integration | Benchmark vs BMAD | Architecture |
| 5 | Menu handlers section | Benchmark vs BMAD | Architecture, Template |
| 6 | ODEV continuous improvement | Self-analysis | Architecture, Template |
| 7 | Manifest CSV files | Benchmark vs BMAD core | Architecture, 4 CSVs |
| 8 | Action #id prompt reference | Benchmark vs BMAD | Architecture menu-handlers |
| 9 | Workflow architecture section | Benchmark vs BMAD | Architecture, workflow.md |

### **Key Implementation Patterns**

#### Agent Menu Example (from shipquick-master.md):

```xml
<menu>
  <item cmd="*create_agent" type="workflow" exec="{module}/workflows/create-agent/">[CA] Create New Agent</item>
  <item cmd="*create_workflow" type="workflow" exec="{module}/workflows/create-workflow/">[CW] Create New Workflow</item>
  <item cmd="*security_review" type="workflow" exec="{module}/workflows/security-review/">[SR] Run Security Review</item>
  <item cmd="*validate" type="exec" exec="{module}/tasks/validate-agent.md">[VA] Validate Components</item>
  <item cmd="*status" type="action">[ST] Show System Status</item>
</menu>
```

#### Manifest File Example (agent-manifest.csv):

```csv
id,name,type,path,icon,status,description
AGT_SHIPQUICK_MASTER_001,Shipquick Master,orchestrator,agents/shipquick-master.md,🧙,active,"Master orchestrator"
AGT_SECURITY_GUARDIAN_001,Security Guardian,specialist,agents/security-guardian.md,🔒,active,"Security audits"
```

#### Workflow Step Example (step-01-init.md):

```yaml
---
step_id: "STEP_CREATE_AGENT_01"
step_number: 1
step_name: "Initialize Agent"
workflow_id: "WF_CREATE_AGENT_001"
dependencies: []
completion_status: "pending"
nextStepFile: "step-02-persona.md"
---
```

### **Benchmark Score: 100/100**

The reference implementation achieves perfect score by:

1. ✅ All agents follow v2.0 enhanced schema
2. ✅ All menu items have exec="" paths
3. ✅ All 4 handler types documented
4. ✅ All workflows have architecture section
5. ✅ All manifests populated
6. ✅ ODEV cycle embedded
7. ✅ Zero todo: placeholders remaining
8. ✅ Complete documentation

---

**END OF SHIPQUICK SPECIFICATION**

Version 1.0.0 | Created 2026-01-10 | Updated 2026-01-13 | Complete Architectural Blueprint

