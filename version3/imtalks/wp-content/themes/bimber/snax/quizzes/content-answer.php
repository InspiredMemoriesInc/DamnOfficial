<?php
$snax_answer_class = array(
	'snax-quiz-answer',
	'snax-quiz-answer-' . get_the_ID(),
);
?>

<div class="<?php echo implode( ' ', array_map( 'sanitize_html_class', $snax_answer_class ) ); ?>" data-quizzard-answer-id="<?php echo absint( get_the_ID() ); ?>">
	<?php if ( has_post_thumbnail() ) : ?>
		<figure class="snax-quiz-answer-media">
			<?php the_post_thumbnail( 'quizzard-answer-grid-1of2' ); ?>
		</figure>
	<?php endif; ?>
	<div class="snax-quiz-answer-label g1-delta g1-delta-1st"><input type="radio" name="snax_question_1" /> <?php the_title(); ?></div>
</div>