<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class FeedbackTest extends TestCase
{
    use WithFaker;

    /**
     * @var \App\User
     */
    protected $user;

    public function setUp(): void
    {
        parent::setUp();

        $this->user = factory(User::class)->create();
        $this->user->assignRole('user');
    }

    /** @test */
    public function addFeedback()
    {
        $this->actingAs($this->user)
            ->postJson('/api/feedback', [
                'title' => $this->faker->text(10),
                'body' => $this->faker->text(100),
            ])
            ->assertSuccessful()
            ->assertJsonStructure(['id', 'title', 'body', 'user_id', 'images_all', 'media']);
    }

    /** @test */
    public function listFeedback()
    {
        $this->actingAs($this->user)
            ->getJson('/api/feedback')
            ->assertSuccessful();
    }
}
