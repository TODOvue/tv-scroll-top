<script setup>
import TvScrollTop from './TvScrollTop.vue';

defineProps({
  position: {
    type: String,
    default: 'right'
  },
  threshold: {
    type: Number,
    default: 300
  }
})
</script>

<template>
  <div class="demo-container">
    <div class="demo-header">
      <h1>TvScrollTop Demo</h1>
      <p class="demo-description">
        Desplázate hacia abajo para ver el botón "Scroll to Top" en acción.
        Aparecerá después de 300px de desplazamiento.
      </p>
    </div>

    <div class="demo-content">
      <section class="content-section">
        <h2>Section 1: Introduction</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ea illo reiciendis repellendus. Aliquid asperiores aut commodi consequatur cupiditate deleniti deserunt dicta dolorem doloremque eos esse et eveniet ex, excepturi expedita explicabo fuga fugiat id ipsam iure laboriosam laborum mollitia neque nobis numquam obcaecati officiis perspiciatis placeat porro quasi quia rem repudiandae rerum sunt veniam veritatis, voluptas? Asperiores doloremque eius eligendi esse inventore magni nemo quam quibusdam tempora unde.</p>
        <p>Aliquam dignissimos doloremque earum ipsam, itaque officiis perferendis quam, quibusdam sed soluta tempora temporibus voluptatibus. Dolor doloribus, ducimus eligendi esse, laboriosam laborum nobis officia officiis omnis perspiciatis quis suscipit tenetur totam.</p>
      </section>

      <section class="content-section">
        <h2>Section 2: Features</h2>
        <ul class="features-list">
          <li>Smooth animation on appear and disappear</li>
          <li>Customizable with threshold and position</li>
          <li>Responsive and accessible</li>
          <li>Modern design with glassmorphism effects</li>
          <li>Optimized for performance</li>
        </ul>
      </section>

      <section class="content-section">
        <h2>Section 3: Demo Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A culpa deleniti ducimus minima necessitatibus neque officiis quae qui repellat voluptatibus? Ab est facilis iusto modi nam quas repellendus sunt voluptatibus? Dicta dolorum eum, illo iure iusto laudantium molestias nam recusandae voluptatibus voluptatum.</p>
        <p>A accusamus, ad aliquam aliquid asperiores aspernatur beatae consequuntur culpa delectus deserunt enim eum fugiat fugit ipsum mollitia natus neque, odit officia optio perspiciatis quia quod ratione reprehenderit saepe sequi sit soluta veritatis.</p>
      </section>

      <section class="content-section">
        <h2>Section 4: More Content</h2>
        <p>Alias at facere quod unde! Alias aliquam beatae commodi eius eveniet illo libero, nihil obcaecati perferendis quae repellendus, veritatis! Aliquam debitis odio temporibus! Illo minus molestiae quo rerum vel! Ad alias aperiam, eligendi eveniet iure maxime non possimus tempora tenetur veniam.</p>
        <p>Mollitia nemo neque officia provident quas quidem voluptatem! Atque deleniti doloremque dolores eligendi ex id laborum, officiis suscipit! Nostrum, odio, placeat. Cumque excepturi optio tenetur vero.</p>
      </section>

      <section class="content-section">
        <h2>Section 5: Additional Example</h2>
        <p>Accusamus ad aut consectetur consequuntur cumque doloremque error, est ex facere facilis, maiores molestias mollitia nostrum obcaecati quam quas, quibusdam quidem quisquam quo ratione rem rerum sequi temporibus! Amet architecto, blanditiis commodi ducimus eveniet ex fuga fugiat nihil praesentium voluptates.</p>
        <p>Accusamus aliquam animi beatae blanditiis consequatur cum debitis dicta, eum eveniet facere fuga illum incidunt inventore ipsum iure labore necessitatibus nesciunt nobis, non nostrum obcaecati officia officiis omnis perspiciatis quas qui quidem quis quisquam repellat sequi sunt temporibus totam unde?</p>
      </section>

      <section class="content-section">
        <h2>Section 6: End of Content</h2>
        <p>Adipisci, aut beatae ex incidunt inventore ipsum magni natus necessitatibus sint ullam? Adipisci animi architecto assumenda beatae consectetur cumque cupiditate debitis dicta error facere facilis fugiat hic in inventore ipsa itaque labore, laborum laudantium minima minus molestias mollitia officiis perferendis placeat quibusdam quis quos ratione rem, repellendus saepe suscipit tempora, veritatis voluptas!</p>
        <p>Now scroll back up using the button!</p>
      </section>
    </div>

    <TvScrollTop
      :position="position"
      :threshold="threshold"
    />
  </div>
</template>

<style scoped>
.demo-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  color: #333;
}

.demo-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e5e7eb;
}

.demo-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1f2937;
}

.demo-description {
  font-size: 1.125rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
}

.content-section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  font-size: 1.75rem;
  color: #1f2937;
  margin-bottom: 1rem;
}

.content-section p {
  margin-bottom: 1rem;
  color: #4b5563;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  padding: 0.75rem 0;
  font-size: 1.125rem;
  color: #374151;
  border-bottom: 1px solid #e5e7eb;
}

.features-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .demo-container {
    padding: 1rem;
  }

  .demo-header h1 {
    font-size: 2rem;
  }

  .content-section {
    padding: 1.5rem;
  }
}
</style>
