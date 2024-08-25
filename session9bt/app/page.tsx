"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import React, { useState } from 'react'

export default function page() {
  const [value, setValue] = useState<number[]>([60]);
  const handleSliderChange = (newValue: number[]) => {
    setValue(newValue);
  };
  return (
    <div>
      <div className='p-2 flex gap-2'>
        <div>Bài 1</div> <br />
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary">primary</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="primary" size="lg">Size Large</Button>
        <Button variant="primary" size="sm">Size smaill</Button>
      </div>

      <div className='p-2'>
        <div>Bài 2</div>
        <Input type='text' className="w-56"/>
        <Input type='number' className="w-56 mt-3"/>
        <Input type='file' className="w-56 mt-3"/>
      </div>

      <div className='p-2'>
        <div>Bài 3</div>
        <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>

        <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/listProduct">List product</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>

        <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/order">Order</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/orderDetail">Order Detail</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        </div>
      </div>

      <div className='p-3'>
        <div>Bài 4</div>
        <div>
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Môn học" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="HTML">HTML</SelectItem>
          <SelectItem value="CSS">CSS</SelectItem>
          <SelectItem value="JavaScript">JavaScript</SelectItem>
          <SelectItem value="ReactJS">ReactJS</SelectItem>
          <SelectItem value="NextJs">Next.js</SelectItem>
        </SelectContent>
      </Select>
        </div>
      </div>

      <div className='p-3'>
        <div>Bài 5</div>

        <div className='mb-4'>
        <InputOTP maxLength={8}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
        <InputOTPSlot index={5} />
        <InputOTPSlot index={6} />
        <InputOTPSlot index={7} />
        </InputOTPGroup>
      </InputOTP>
        </div>

        <div>
        <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
        </div>
      </div>  

      <div>
        <div>Bài 6</div>
        <div className='w-56'><Slider defaultValue={value} max={100} step={1} min={0} onValueChange={handleSliderChange}/></div>
        <div>Vailue: {value}</div>
      </div>

      <div className='p-4'>
        <div>Bài 7</div>
        <div className='border border-gray-400 w-96 h-80 flex flex-col justify-center gap-8 pl-6'>
          <div className='text-xl font-bold'>Tạo dự án</div>
          <div className='w-[95%]'>
           <label htmlFor="">Tên</label>
           <Input type='text' placeholder='Name of your project'/> 
          </div>
          <div>
            <label htmlFor="">Công nghệk</label>
            <Select>
        <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Next.js" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="NextJs">Next.js</SelectItem>
          <SelectItem value="JavaScript">JavaScript</SelectItem>
          <SelectItem value="ReactJS">ReactJS</SelectItem>
        </SelectContent>
      </Select>
          </div>
          <div className='flex justify-around'>
          <Button variant="outline">Đóng</Button>
          <Button variant="default">Tạo</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
