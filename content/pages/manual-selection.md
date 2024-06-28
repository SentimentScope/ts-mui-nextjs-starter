---
type: Page
title: Manual Selection
sections:
  - type: HeroSection
    title: N-gram Manual selection
    subtitle: ''
    text: "This post is a demonstration of how manual n-gram extraction and selection will work in practice. Once n-grams have been extracted and ranked by both frequency and relevance, phrases and combinations of words that align with one or more ‘disgust categories’ outlined in the previous post will be identified. This will illustrate how bigrams and trigrams will be selected based on their relevance to the expression of disgust.\n\n### Example showing n-gram extraction and selection in practice:\n\nAs covered previously, Haidt posits that references to hygiene and references to outgroups as animals- especially pests- are both indicative of disgust. Given that, consider the following hypothetical comment section excerpt:\_\n\n*   This is getting ridiculous. Filthy rats. We need to clean up our country.\n    *   Immigrants aren’t the problem, it’s ignorant people like you that are. They are not filthy, and they are not rats- they’re people just like you and me.\n        *   Whatever, snowflake.\n*   Unbelievable, letting so many in when unemployment is so high!!\n    *   Immigrants do the jobs we don’t want to do. What’s the problem with that?\n*   This country is infested with rats now.\n    *   Yeah, this country has been going to the dogs for years now.\n*   Immigration goes up and crime rates are through the roof. Politicians are too scared to do what we all know needs to be done to clean up the streets. What a joke.\n    *   They’re corrupt!!\n\nExamples of bigrams which would pass manual selection:\_\n\n*   “country, infest”\n\n*   “filthy, rats”\n\n*   “rats, infest”\n\n*   “they, filthy”\n\n*   “they, rats”\n\n*   “clean, up”\n\n*   “clean, streets”\n\nExamples of trigrams which would pass manual selection:\_\n\n*   “country, rats, infest”\n\n*   “clean, rats, country”\n\n*   “they, are, rats”\n\n*   “country, clean, up”\n\n*   “crime, clean, streets”\n\nExamples of bigrams which would not pass manual selection:\n\n*   “immigration, up”\n\n*   “immigration, country”\n\n*   “immigrant, problem”\n\nExamples of trigrams which would not pass manual selection:\n\n*   “immigrants, job, want”\n\n*   “ridiculous, need, country”\n\n*   \"immigration, politician, know\"\n\n"
    actions:
      - type: Button
        label: Next Post
        url: /limitations-and-llms
        size: large
        variant: contained
        color: primary
---
