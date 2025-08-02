import { Button } from '@/components/ui/button'
import { Plus, ShoppingCart } from 'lucide-react'
import React from 'react'

function Emptyorder() {
  return (
    <div className="text-center py-8">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  No orders found
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create New Order
              </Button>
            </div>
          </div>
  )
}

export default Emptyorder
