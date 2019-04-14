<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Illuminate\Database\Eloquent\SoftDeletes;

class Feedback extends Model implements HasMedia
{
    use HasMediaTrait,
        SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'feedbacks';

    /**
     * The attributes that should be mutated to dates.
     *
     * @var array
     */
    protected $dates = [
        'deleted_at', 'created_at', 'deleted_at'
    ];

    /**
     * @var array
     */
    protected $fillable = [
        'title', 'body', 'answer'
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'images_all'
    ];

    /**
     * Связь с пользовательской моделью "User": "One To Many"
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Получить все фото для товара из коллекции 'gallery'
     */
    public function getImagesAllAttribute()
    {
        $url = [];

        foreach($this->getMedia('files') as $gallery) {
            $url[] = $gallery->getUrl();
        }

        return $url;
    }
}
