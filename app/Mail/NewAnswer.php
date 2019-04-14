<?php

namespace App\Mail;

use App\Feedback;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewAnswer extends Mailable
{
    use Queueable,
        SerializesModels;

    /**
     * The User instance.
     *
     * @var Feedback
     */
    public $feedback;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Feedback $feedback)
    {
        $this->feedback = $feedback;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@robot.io')
            ->markdown('emails.answer');
    }
}
