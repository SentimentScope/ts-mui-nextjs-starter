---
type: Page
title: Quantifying Disgust
sections:
  - type: HeroSection
    title: Quantifying Disgust
    subtitle: An exploration into online disgust sentiment measurement
    text: "## Framing the task:\n\nThe final aim of this research is to develop a universally applicable disgust measurement tool to help predict conflict. With this in mind, it is prudent to begin the first project, an exploration into online disgust sentiment measurement, with a methodology designed independently of the language and culture in which the disgust narratives are propagated. This will minimise the labour required to tailor the tool to a specific ingroup later on. It will also reduce the possibility of cultural and perceptual biases- a highly relevant concern when studying both language and moral disgust towards outgroups.\_\n\n## Using nltk to quantify disgust narratives:\n\nUsing the Python program 'Natural Language Toolkit' (nltk), I plan to extract collocations- sequences of words which often collocate- from targeted datasets. Only bigrams (two collocating words) and trigrams (three collocating words) will be selected in order to reduce dimensionality.\_\n\n\n\nFor a full explanation of collocation extraction using nltk, see: <https://www.geeksforgeeks.org/collocation-language-modelling-with-nltk/>\n\n\n\nThese datasets will be comment sections on forums and news articles with topics specifically pertaining to immigration or migrant groups, selected such that commenters are representative of a given community, ethnic ingroup, or socioeconomic class. Five such comment sections will be selected per month. Selection bias will be accounted for by selecting the first five articles or forum posts which occur in the month.\_\n\nI will find which collocations are likely to be targeted specifically at immigrant groups by identifying those collocations which do not frequently occur in comparable datasets which are not related to immigration or migrant groups. This will be done using Term Frequency–Inverse Document Frequency (TF-IDF) analysis, and will enable me to pinpoint the 90th percentile of relevance to immigration by weighing those collocations which both popularly occur and only occur when the dataset concerns immigration and immigrant groups.\_\n\nAn overview of TF-IDF can be found here:\_\n\n<https://monkeylearn.com/blog/what-is-tf-idf/>\_\n\n\n\nFollowing this step, I will utilise a categorical model rooted in Jonathan Haidt’s Moral Foundations Theory to manually select which collocations in the 90th percentile of relevance to immigration are likely to be disgust driven, forming a 'disgust lexicon' of the online community.\_\n\nDisgust in each comment section or forum thread will be indicated by dividing the frequency of collocations in the disgust lexicon by the total word count of each comment section. The disgust lexicon and the indication of disgust in each comment section will subsequently be used to train and refine an LLM.\n\nIn the next post, I will propose the categorical model which will be used for manual collocation selection.\n"
    actions:
      - type: Button
        label: Next Post
        url: /categorical-model-intro
        size: large
        variant: contained
        color: primary
    image:
      type: Image
      url: /images/premium_photo-1664392288260-4d2f3f0f2dfb Medium.jpeg
      altText: Quantifying a primal sentiment
---
