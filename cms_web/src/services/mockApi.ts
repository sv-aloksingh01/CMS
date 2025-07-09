// Mock API service for testing without backend
interface Article {
  id: number;
  title: string;
  content: string;
  categoryName: string;
  tags: string[];
}

// Mock data
const mockArticles: Article[] = [
  {
    id: 1,
    title: "The Rise and Fall of Ancient Rome",
    content: "Ancient Rome stands as one of history's most influential civilizations, spanning over a millennium from its legendary founding in 753 BCE to the fall of Constantinople in 1453 CE. This comprehensive exploration delves into the political, social, and military factors that contributed to Rome's unprecedented expansion and eventual decline.\n\nThe Roman Republic, established around 509 BCE, introduced revolutionary concepts of governance that would influence political systems for centuries to come. The system of checks and balances, with its consuls, senate, and popular assemblies, created a framework that allowed Rome to grow from a small city-state to a Mediterranean superpower.\n\nRome's military innovations, including the manipular system and later the cohort-based legions, gave them significant advantages over their enemies. The professional army, combined with Rome's policy of integrating conquered peoples, created a sustainable model for expansion that lasted for centuries.",
    categoryName: "History",
    tags: ["Ancient Rome", "Empire", "Republic", "Military History"]
  },
  {
    id: 2,
    title: "Understanding Climate Zones and Their Impact",
    content: "Earth's diverse climate zones shape everything from biodiversity to human settlement patterns. This detailed examination explores the major climate classifications, their characteristics, and how they influence life on our planet.\n\nThe Köppen climate classification system, developed by climatologist Wladimir Köppen, remains the most widely used method for categorizing world climates. This system divides climates into five main groups: tropical, dry, temperate, continental, and polar, each with distinct temperature and precipitation patterns.\n\nClimate zones don't just determine weather patterns; they profoundly influence agriculture, architecture, culture, and economic development. Understanding these zones is crucial for addressing challenges like climate change, food security, and sustainable development in different regions of the world.",
    categoryName: "Geography",
    tags: ["Climate", "Environment", "Weather Patterns", "Global Geography"]
  },
  {
    id: 3,
    title: "Quantum Computing: The Next Technological Revolution",
    content: "Quantum computing represents a paradigm shift in computational power, promising to solve problems that are intractable for classical computers. This comprehensive guide explores the principles, current developments, and potential applications of quantum technology.\n\nUnlike classical computers that use bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously through superposition. This property, combined with quantum entanglement, allows quantum computers to process vast amounts of information in parallel.\n\nMajor technology companies and research institutions are racing to achieve quantum supremacy and develop practical quantum applications. From cryptography and drug discovery to financial modeling and artificial intelligence, quantum computing could revolutionize numerous fields in the coming decades.",
    categoryName: "Technology",
    tags: ["Quantum Computing", "Innovation", "Future Tech", "Computing"]
  },
  {
    id: 4,
    title: "The Seven Wonders of the Ancient World",
    content: "The Seven Wonders of the Ancient World represent humanity's greatest architectural and artistic achievements in antiquity. These magnificent structures, compiled by ancient Greek historians, showcase the ingenuity, ambition, and cultural values of ancient civilizations.\n\nOnly the Great Pyramid of Giza remains largely intact today, serving as a testament to ancient Egyptian engineering prowess. The other wonders - the Hanging Gardens of Babylon, the Temple of Artemis at Ephesus, the Statue of Zeus at Olympia, the Mausoleum at Halicarnassus, the Colossus of Rhodes, and the Lighthouse of Alexandria - exist now only in historical accounts and archaeological fragments.\n\nEach wonder tells a unique story of human achievement, religious devotion, and the desire to create something eternal. Their legacy continues to inspire architects, artists, and dreamers throughout history.",
    categoryName: "General Knowledge",
    tags: ["Ancient Wonders", "Architecture", "History", "Culture"]
  },
  {
    id: 5,
    title: "Building Modern Data Pipelines with Apache Kafka",
    content: "Apache Kafka has revolutionized how organizations handle real-time data streaming and processing. This comprehensive guide explores building robust, scalable data pipelines using Kafka's distributed streaming platform.\n\nKafka's publish-subscribe model enables decoupled, fault-tolerant data processing at massive scale. By organizing data into topics and partitions, Kafka can handle millions of messages per second while maintaining durability and consistency guarantees.\n\nModern data engineering practices leverage Kafka for various use cases: real-time analytics, event sourcing, log aggregation, and microservices communication. Understanding Kafka's architecture, including brokers, producers, consumers, and Kafka Connect, is essential for building next-generation data infrastructure.",
    categoryName: "Data Engineering",
    tags: ["Apache Kafka", "Data Pipelines", "Streaming", "Big Data"]
  },
  {
    id: 6,
    title: "Statistical Analysis with Python: From Basics to Advanced",
    content: "Python has become the go-to language for data science, offering powerful libraries and tools for statistical analysis. This comprehensive guide covers essential statistical concepts and their implementation using Python's rich ecosystem.\n\nLibraries like NumPy, Pandas, SciPy, and Statsmodels provide the foundation for statistical computing in Python. From descriptive statistics and hypothesis testing to regression analysis and time series forecasting, Python offers intuitive APIs for complex statistical operations.\n\nReal-world data science projects require understanding both statistical theory and practical implementation. This article bridges that gap, providing hands-on examples of statistical analysis techniques commonly used in business intelligence, research, and machine learning applications.",
    categoryName: "Data Science",
    tags: ["Python", "Statistics", "Data Analysis", "Scientific Computing"]
  },
  {
    id: 7,
    title: "Deep Learning Architectures: CNNs, RNNs, and Transformers",
    content: "Deep learning has transformed artificial intelligence through sophisticated neural network architectures. This detailed exploration covers the three fundamental architectures that power modern AI applications: Convolutional Neural Networks, Recurrent Neural Networks, and Transformers.\n\nConvolutional Neural Networks (CNNs) excel at processing grid-like data such as images, using convolution operations to detect local features and hierarchical patterns. Their success in computer vision tasks has made them indispensable for image recognition, medical imaging, and autonomous vehicles.\n\nRecurrent Neural Networks (RNNs) and their variants (LSTM, GRU) handle sequential data by maintaining memory of previous inputs. Transformers, introduced in 'Attention Is All You Need,' revolutionized natural language processing by using self-attention mechanisms to process sequences in parallel, leading to breakthroughs like GPT and BERT.",
    categoryName: "Machine Learning",
    tags: ["Deep Learning", "Neural Networks", "CNN", "RNN", "Transformers"]
  },
  {
    id: 8,
    title: "The Future of Artificial Intelligence: Opportunities and Challenges",
    content: "Artificial Intelligence stands at the threshold of transforming every aspect of human society. This comprehensive analysis examines current AI capabilities, emerging trends, and the profound implications for our future.\n\nCurrent AI systems excel in narrow domains: image recognition, natural language processing, game playing, and pattern recognition. However, the quest for Artificial General Intelligence (AGI) - systems that match human cognitive abilities across all domains - remains one of the greatest challenges in computer science.\n\nThe societal implications of AI advancement are profound: job displacement and creation, privacy concerns, algorithmic bias, and the need for new regulatory frameworks. As AI becomes more powerful and ubiquitous, addressing these challenges while harnessing AI's potential for solving global problems becomes increasingly critical.",
    categoryName: "Artificial Intelligence",
    tags: ["AI", "AGI", "Future Technology", "Ethics", "Society"]
  }
];

// Mock user for authentication
const mockUser = {
  username: "admin",
  password: "password123"
};

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const mockApi = {
  // Get all articles
  getArticles: async (category?: string): Promise<Article[]> => {
    await delay(500); // Simulate network delay
    
    if (!category || category === 'all') {
      return [...mockArticles];
    }
    
    if (category === 'trending') {
      // Return trending articles (most recent or popular ones)
      return mockArticles
        .sort((a, b) => b.id - a.id) // Sort by newest first
        .slice(0, 5); // Get top 5 trending
    }
    
    // Filter by category
    const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
    return mockArticles.filter(article => 
      article.categoryName.toLowerCase() === normalizedCategory
    );
  },

  // Get single article
  getArticle: async (id: number): Promise<Article> => {
    await delay(300);
    const article = mockArticles.find(a => a.id === id);
    if (!article) {
      throw new Error('Article not found');
    }
    return { ...article };
  },

  // Create article
  createArticle: async (articleData: Omit<Article, 'id'>): Promise<Article> => {
    await delay(800);
    const newArticle: Article = {
      ...articleData,
      id: Math.max(...mockArticles.map(a => a.id)) + 1
    };
    mockArticles.push(newArticle);
    return { ...newArticle };
  },

  // Update article
  updateArticle: async (id: number, articleData: Omit<Article, 'id'>): Promise<Article> => {
    await delay(800);
    const index = mockArticles.findIndex(a => a.id === id);
    if (index === -1) {
      throw new Error('Article not found');
    }
    mockArticles[index] = { ...articleData, id };
    return { ...mockArticles[index] };
  },

  // Delete article
  deleteArticle: async (id: number): Promise<void> => {
    await delay(500);
    const index = mockArticles.findIndex(a => a.id === id);
    if (index === -1) {
      throw new Error('Article not found');
    }
    mockArticles.splice(index, 1);
  },

  // Login
  login: async (username: string, password: string): Promise<{ token: string }> => {
    await delay(1000);
    
    console.log('Mock API Login attempt:', { username, password });
    console.log('Expected credentials:', { username: mockUser.username, password: mockUser.password });
    
    if (username === mockUser.username && password === mockUser.password) {
      console.log('Login successful!');
      return { token: 'mock-jwt-token-12345' };
    }
    
    console.log('Login failed - invalid credentials');
    throw new Error('Invalid username or password');
  }
};