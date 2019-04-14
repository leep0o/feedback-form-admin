<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\User;

class NewUser extends Mailable
{
    use Queueable,
        SerializesModels;

    /**
     * The User instance.
     *
     * @var User
     */
    public $user;
    public $password;


    public function __construct(User $user, $password)
    {
        $this->user = $user;
        $this->password = $password;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('info@robot.io')
            ->markdown('emails.user');
    }
}
